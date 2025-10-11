import React, { createContext, useContext, ReactNode, useEffect } from 'react'
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

const shadow = {
  main: '-1px -2px 2.6px 0px rgba(100, 255, 218, 0.2), 1px 4px 4px 0px rgba(35, 53, 84, 0.3)',
 card: '0 8px 32px 0 rgba(35, 53, 84, 0.2)',
}

const darkTheme: Theme = {
  colors: darkColors,
  shadow,
  media: baseTheme.media,
  animations: baseTheme.animations,
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    // Устанавливаем CSS-переменные для темной темы
    const root = document.documentElement;
    
    // Устанавливаем переменные для темной темы
    Object.entries(darkTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value as string);
    });
    
    Object.entries(darkTheme.shadow).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value as string);
    });
    
    // Устанавливаем transitions
    root.style.setProperty('--transitions', darkTheme.animations.transitions as string);
    
    // Устанавливаем data-theme атрибут для темной темы
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: darkTheme }}>
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