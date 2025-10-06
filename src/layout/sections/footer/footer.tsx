import { S } from './footer.styles'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <S.Footer role="contentinfo">
      <S.Text>{t('description', { ns: 'footer' })}</S.Text>
    </S.Footer>
  )
}
