import { Suspense, lazy, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import useIsMobile from 'hooks/useIsMobile'

// Компоненты, которые видны сразу, загружаем сразу
import { Header, LanguageSwitcher, Main } from 'layout'
import { Cursor, GoTopButton, Particle, PageTransition } from 'components'

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

function App() {
  const isMobile = useIsMobile()
   const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <I18nInitializer>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </I18nInitializer>
    </Suspense>
  )
}

export default App
