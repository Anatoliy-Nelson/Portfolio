import { Suspense, lazy, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, useTheme } from 'contexts/ThemeContext'
import { theme as baseTheme } from 'styles/theme'
import useIsMobile from 'hooks/useIsMobile'

// Компоненты, которые видны сразу, загружаем сразу
import { Header, LanguageSwitcher, Main } from 'layout'
import { Cursor, GoTopButton, Particle, PageTransition, ThemeSwitcher } from 'components'

// Ленивая загрузка компонентов, которые не видны сразу при загрузке
const LazyAboutMe = lazy(() => import('./layout/sections/about-me/about-me').then(module => ({ default: module.AboutMe })))
const LazyContacts = lazy(() => import('./layout/sections/contacts/contacts').then(module => ({ default: module.Contacts })))
const LazyFooter = lazy(() => import('./layout/sections/footer/footer').then(module => ({ default: module.Footer })))
const LazyPortfolio = lazy(() => import('./layout/sections/portfolio').then(module => ({ default: module.Portfolio })))
const LazySkills = lazy(() => import('./layout/sections/skills/skills').then(module => ({ default: module.Skills })))

// Компонент для ожидания инициализации i18n
const I18nInitializer = ({ children }: { children: React.ReactNode }) => {
  // Просто ждем инициализации, Suspense будет обрабатывать это
  return <>{children}</>
}

// Компонент для отображения приложения с темой
const AppWithTheme = () => {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <StyledThemeProvider theme={theme}>
      <Cursor isMobile={isMobile} />
      <Particle />
      <header role="banner">
        <Header isMobile={isMobile} />
      </header>
      <LanguageSwitcher />
      <main role="main">
        <PageTransition>
          <Main />
        </PageTransition>
        {/* Загружаем остальные секции с задержкой для улучшения производительности */}
        {isMounted && (
          <Suspense fallback={<div style={{ height: '100px' }} />}>
            <PageTransition>
              <LazyAboutMe />
            </PageTransition>
            <PageTransition>
              <LazySkills />
            </PageTransition>
            <PageTransition>
              <LazyPortfolio />
            </PageTransition>
            <PageTransition>
              <LazyContacts />
            </PageTransition>
          </Suspense>
        )}
      </main>
      {isMounted && (
        <Suspense fallback={null}>
          <footer role="contentinfo">
            <PageTransition>
              <LazyFooter />
            </PageTransition>
          </footer>
        </Suspense>
      )}
      <GoTopButton />
    </StyledThemeProvider>
 )
}

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <I18nInitializer>
        <ThemeProvider>
          <AppWithTheme />
        </ThemeProvider>
      </I18nInitializer>
    </Suspense>
  )
}

export default App
