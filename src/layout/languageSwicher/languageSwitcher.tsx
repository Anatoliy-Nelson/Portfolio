import { Button, ThemeSwitcher } from 'components'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'contexts/ThemeContext'

export const LanguageSwitcher = () => {
 const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [isShowButton, setIsShowButton] = useState(true)
  const { i18n } = useTranslation()
  const { isDark } = useTheme()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 60) {
        setIsShowButton(true)
      } else {
        setIsShowButton(false)
      }
    })
  }, [])

  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setSelectedLanguage(language)
  }

  return (
    <AnimatePresence>
      {isShowButton && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <LanguageSwitcherStyled>
            <Button
              variant={'text'}
              active={selectedLanguage === 'en'}
              value={'en'}
              onClick={() => onChangeLanguage('en')}
            >
              EN
            </Button>
            <Button
              variant={'text'}
              active={selectedLanguage === 'ru'}
              value={'ru'}
              onClick={() => onChangeLanguage('ru')}
            >
              RU
            </Button>
            <ThemeSwitcherWrapper>
              <ThemeSwitcher />
            </ThemeSwitcherWrapper>
          </LanguageSwitcherStyled>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ThemeSwitcherWrapper = styled.div`
 display: flex;
 align-items: center;
  justify-content: center;
  margin-top: 5px;
  
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1);
      background-color: ${theme.colors.accent};
      color: ${theme.colors.primaryBg};
    }
 }
`

const LanguageSwitcherStyled = styled.div`
  position: absolute;
  top: 120px;
  right: 10px;
  box-shadow: ${theme.shadow.main};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 5px;

  z-index: 9998;
  @media ${theme.media.tablet} {
    box-shadow: none;
    top: 10px;
    left: 10px;
    z-index: 9999;
    flex-direction: column;
  }
`
