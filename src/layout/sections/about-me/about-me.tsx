import { Container, SectionText, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'
import { S } from './about-me_styles'
import { useTranslation } from 'react-i18next'
import secondPhoto from 'assets/second-photo.webp'

export const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <S.AboutMe id={'aboutMe'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'aboutMe' })}</SectionTitle>
        <Fade>
          <S.Wrapper>
            <SectionText>
              {t('text1', { ns: 'aboutMe' })}
              <br />
              {t('text2', { ns: 'aboutMe' })}
              <br />
              {t('text3', { ns: 'aboutMe' })}
              <br />
              {t('text4', { ns: 'aboutMe' })}
            </SectionText>
            <S.Photo
              src={secondPhoto}
              alt={t('title', { ns: 'aboutMe' })}
            />
          </S.Wrapper>
        </Fade>
      </Container>
    </S.AboutMe>
  )
}
