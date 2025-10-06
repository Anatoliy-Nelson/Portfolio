import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Интерфейсы для типизации
interface LanguageResources {
  header: any
  main: any
  aboutMe: any
  skills: any
 portfolio: any
 contacts: any
 footer: any
}

// Функция для загрузки языковых ресурсов
const loadLanguageResources = async (language: string): Promise<LanguageResources> => {
  const [header, main, aboutMe, skills, portfolio, contacts, footer] = await Promise.all([
    import(`./locales/${language}/${language === 'en' ? 'en' : 'ru'}Header.json`),
    import(`./locales/${language}/${language === 'en' ? 'en' : 'ru'}Main.json`),
    import(`./locales/${language}/${language === 'en' ? 'en' : 'ru'}AboutMe.json`),
    import(`./locales/${language}/${language === 'en' ? 'en' : 'ru'}Skills.json`),
    import(`./locales/${language}/${language === 'en' ? 'en' : 'ru'}Portfolio.json`),
    import(`./locales/${language}/${language === 'en' ? 'en' : 'ru'}Contacts.json`),
    import(`./locales/${language}/${language === 'en' ? 'en' : 'ru'}Footer.json`),
  ])

  return {
    header: header.default,
    main: main.default,
    aboutMe: aboutMe.default,
    skills: skills.default,
    portfolio: portfolio.default,
    contacts: contacts.default,
    footer: footer.default,
  }
}

// Загружаем ресурсы для обоих языков перед инициализацией
const loadAllResources = async () => {
  const ruResources = await loadLanguageResources('ru')
  const enResources = await loadLanguageResources('en')
  
  const resources: any = {}
 resources.ru = {}
  resources.en = {}
  
  Object.entries(ruResources).forEach(([namespace, resource]) => {
    resources.ru[namespace] = resource
  })
  
 Object.entries(enResources).forEach(([namespace, resource]) => {
    resources.en[namespace] = resource
  })
  
  return resources
}

// Инициализация i18next с предзагруженными ресурсами для обоих языков
const initI18n = async () => {
  const allResources = await loadAllResources()
  
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      debug: false, // Отключаем debug в продакшене
      fallbackLng: 'ru',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false,
      },
      load: 'languageOnly',
      resources: allResources,
    })
}


// Загружаем ресурсы при изменении языка (на случай, если добавляются новые языки)
i18next.on('languageChanged', async (lng) => {
  // Все ресурсы уже загружены, поэтому больше ничего делать не нужно
})

// Инициализируем i18n с предзагруженными русскими ресурсами при запуске
const i18nPromise = initI18n()

export default i18next
export { i18nPromise }
