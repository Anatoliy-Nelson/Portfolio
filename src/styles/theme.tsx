// Оставляем только медиа-запросы и анимации, так как цвета теперь управляются через контекст
export const theme = {
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
