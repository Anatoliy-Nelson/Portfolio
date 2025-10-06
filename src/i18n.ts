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

// Инициализация i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false, // Отключаем debug в продакшене
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    load: 'languageOnly',
    // Инициализируем с пустыми ресурсами, которые будут загружаться динамически
    resources: {},
  })

// Загружаем ресурсы для текущего языка
const initializeCurrentLanguage = async () => {
  const currentLng = i18next.language || 'en'
  try {
    const resources = await loadLanguageResources(currentLng)
    Object.entries(resources).forEach(([namespace, resource]) => {
      i18next.addResourceBundle(currentLng, namespace, resource, true, true)
    })
  } catch (error) {
    console.error(`Error loading resources for language ${currentLng}:`, error)
  }
}

// Загружаем ресурсы при изменении языка
i18next.on('languageChanged', async (lng) => {
  try {
    // Проверяем, загружены ли уже ресурсы для этого языка
    if (!i18next.hasResourceBundle(lng, 'header')) {
      const resources = await loadLanguageResources(lng)
      Object.entries(resources).forEach(([namespace, resource]) => {
        i18next.addResourceBundle(lng, namespace, resource, true, true)
      })
    }
  } catch (error) {
    console.error(`Error loading resources for language ${lng}:`, error)
  }
})

// Инициализируем текущий язык при запуске
initializeCurrentLanguage()

export default i18next
