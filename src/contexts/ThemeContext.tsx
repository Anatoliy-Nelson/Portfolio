import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { theme as baseTheme } from 'styles/theme'

interface ThemeColors {
  primaryBg: string
  secondaryBg: string
  accent: string
  secondary: string
  font: string
  fontSecondary: string
  border: string
 hover: string
}

interface Theme {
  colors: ThemeColors
 shadow: {
    main: string
    card: string
  }
  media: {
    xxs: string
    xs: string
    sm: string
    tablet: string
    md: string
    lg: string
    xl: string
    mobile: string
  }
  animations: {
    transitions: string
  }
}

interface ThemeContextType {
  theme: Theme
 toggleTheme: () => void
  isDark: boolean
}

const darkColors: ThemeColors = {
  primaryBg: '#0A192F',   // Темно-синий фон (профессиональный)
  secondaryBg: '#112240', // Вторичный темно-синий фон
  accent: '#64FFDA',     // Акцентный цвет (бирюзовый)
  secondary: '#5CA6E0',  // Вторичный акцентный цвет (голубой)
  font: '#CCD6F6',       // Светло-серый шрифт
  fontSecondary: '#8892B0', // Вторичный цвет шрифта (серо-голубой)
  border: '#233554',     // Цвет границ
  hover: '#64FFDA',      // Цвет при наведении
}

const lightColors: ThemeColors = {
 primaryBg: '#FFFFFF',   // Белый фон
 secondaryBg: '#F8F9FA', // Светло-серый фон
  accent: '#0A192F',     // Темно-синий акцент
  secondary: '#64FFDA',  // Бирюзовый вторичный цвет
 font: '#2D3748',       // Темно-серый шрифт
  fontSecondary: '#718096', // Вторичный цвет шрифта (светло-серый)
  border: '#E2E8F0',     // Светлый цвет границ
  hover: '#0A192F',      // Темно-синий при наведении
}

const shadow = {
  main: '-1px -2px 2.6px 0px rgba(100, 255, 218, 0.2), 1px 4px 4px 0px rgba(35, 53, 84, 0.3)',
  card: '0 8px 32px 0 rgba(35, 53, 84, 0.2)',
}

const lightShadow = {
  main: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
  card: '0 4px 16px rgba(0, 0, 0.1)',
}

const darkTheme: Theme = {
  colors: darkColors,
  shadow,
  media: baseTheme.media,
  animations: baseTheme.animations,
}

const lightTheme: Theme = {
  colors: lightColors,
  shadow: lightShadow,
  media: baseTheme.media,
  animations: baseTheme.animations,
}

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'light') return lightTheme
  if (savedTheme === 'dark') return darkTheme
  return prefersDark ? darkTheme : lightTheme
}

const getInitialIsDark = (): boolean => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'light') return false
  if (savedTheme === 'dark') return true
 return prefersDark
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [isDark, setIsDark] = useState<boolean>(getInitialIsDark)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    const newIsDark = !isDark
    
    // Сохраняем новое состояние темы в localStorage
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    
    // Обновляем CSS custom properties напрямую
    const root = document.documentElement
    if (newIsDark) {
      // Темная тема
      root.style.setProperty('--color-primaryBg', '#0A192F')
      root.style.setProperty('--color-secondaryBg', '#112240')
      root.style.setProperty('--color-accent', '#64FFDA')
      root.style.setProperty('--color-secondary', '#5CA6E0')
      root.style.setProperty('--color-font', '#CCD6F6')
      root.style.setProperty('--color-fontSecondary', '#8892B0')
      root.style.setProperty('--color-border', '#233554')
      root.style.setProperty('--color-hover', '#64FFDA')
      root.style.setProperty('--shadow-main', '-1px -2px 2.6px 0px rgba(100, 255, 218, 0.2), 1px 4px 4px 0px rgba(35, 53, 84, 0.3)')
      root.style.setProperty('--shadow-card', '0 8px 32px 0 rgba(35, 53, 84, 0.2)')
    } else {
      // Светлая тема
      root.style.setProperty('--color-primaryBg', '#FFFFFF')
      root.style.setProperty('--color-secondaryBg', '#F8F9FA')
      root.style.setProperty('--color-accent', '#0A192F')
      root.style.setProperty('--color-secondary', '#64FFDA')
      root.style.setProperty('--color-font', '#2D3748')
      root.style.setProperty('--color-fontSecondary', '#718096')
      root.style.setProperty('--color-border', '#E2E8F0')
      root.style.setProperty('--color-hover', '#0A192F')
      root.style.setProperty('--shadow-main', '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)')
      root.style.setProperty('--shadow-card', '0 4px 16px rgba(0, 0, 0, 0.1)')
    }
    
    // Обновляем состояние React
    setIsDark(newIsDark)
  }

  // Устанавливаем начальные CSS custom properties при инициализации
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      // Темная тема
      root.style.setProperty('--color-primaryBg', '#0A192F')
      root.style.setProperty('--color-secondaryBg', '#112240')
      root.style.setProperty('--color-accent', '#64FFDA')
      root.style.setProperty('--color-secondary', '#5CA6E0')
      root.style.setProperty('--color-font', '#CCD6F6')
      root.style.setProperty('--color-fontSecondary', '#8892B0')
      root.style.setProperty('--color-border', '#233554')
      root.style.setProperty('--color-hover', '#64FFDA')
      root.style.setProperty('--shadow-main', '-1px -2px 2.6px 0px rgba(100, 255, 218, 0.2), 1px 4px 4px 0px rgba(35, 53, 84, 0.3)')
      root.style.setProperty('--shadow-card', '0 8px 32px 0 rgba(35, 53, 84, 0.2)')
    } else {
      // Светлая тема
      root.style.setProperty('--color-primaryBg', '#FFFFFF')
      root.style.setProperty('--color-secondaryBg', '#F8F9FA')
      root.style.setProperty('--color-accent', '#0A192F')
      root.style.setProperty('--color-secondary', '#64FFDA')
      root.style.setProperty('--color-font', '#2D3748')
      root.style.setProperty('--color-fontSecondary', '#718096')
      root.style.setProperty('--color-border', '#E2E8F0')
      root.style.setProperty('--color-hover', '#0A192F')
      root.style.setProperty('--shadow-main', '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)')
      root.style.setProperty('--shadow-card', '0 4px 16px rgba(0, 0, 0, 0.1)')
    }
    
    // Также устанавливаем data-theme атрибут
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}