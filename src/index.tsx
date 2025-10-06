import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyles } from 'styles/global-styles'
import { i18nPromise } from './i18n'

// Дожидаемся инициализации i18n перед рендерингом приложения
const renderApp = async () => {
  await i18nPromise
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  root.render(
    <>
      <App />
      <GlobalStyles />
    </>,
  )
}

renderApp()

reportWebVitals()
