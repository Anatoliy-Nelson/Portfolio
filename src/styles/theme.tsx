export const theme = {
  colors: {
    primaryBg: '#0A192F',   // Темно-синий фон (профессиональный)
    secondaryBg: '#112240', // Вторичный темно-синий фон
    accent: '#64FFDA',     // Акцентный цвет (бирюзовый)
    secondary: '#5CA6E0',  // Вторичный акцентный цвет (голубой)
    font: '#CCD6F6',       // Светло-серый шрифт
    fontSecondary: '#8892B0', // Вторичный цвет шрифта (серо-голубой)
    border: '#233554',     // Цвет границ
    hover: '#64FFDA',      // Цвет при наведении
  },
  shadow: {
    main: '-1px -2px 2.6px 0px rgba(100, 255, 218, 0.2), 1px 4px 4px 0px rgba(35, 53, 84, 0.3)',
    card: '0 8px 32px 0 rgba(35, 53, 84, 0.2)',
  },
  media: {
    // Добавляем больше breakpoints для лучшей адаптивности
    xxs: 'screen and (max-width: 320px)', // Очень маленькие экраны
    xs: 'screen and (max-width: 480px)',  // Маленькие экраны
    sm: 'screen and (max-width: 576px)',  // Маленькие планшеты и большие телефоны
    tablet: 'screen and (max-width: 768px)', // Планшеты
    md: 'screen and (max-width: 992px)',   // Средние экраны
    lg: 'screen and (max-width: 1200px)',  // Большие экраны
    xl: 'screen and (max-width: 1400px)',  // Очень большие экраны
    mobile: 'screen and (max-width: 576px)',
  },
  animations: {
    transitions: '0.3s ease-in-out',
  },
}
