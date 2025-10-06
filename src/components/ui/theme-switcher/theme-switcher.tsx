import React from 'react'
import { useTheme } from 'contexts/ThemeContext'
import { Button } from 'components'
import { ThemeSwitcherWrapper } from './theme-switcher_styles'

export const ThemeSwitcher: React.FC = () => {
  const { toggleTheme, isDark } = useTheme()

  return (
    <ThemeSwitcherWrapper>
      <Button
        variant="text"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {isDark ? '☀️' : '🌙'}
      </Button>
    </ThemeSwitcherWrapper>
  )
}