import { Button, Container, Icon } from 'components'
import { S } from './main_styles'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import mainPhoto from 'assets/main-photo.webp'

export const Main = () => {
 const { t } = useTranslation()
 return (
    <S.Main id={'home'} role="banner" aria-label="Main banner">
      <Container>
        <Fade>
          <S.MainWrapper>
            <S.PhotoWrapper>
              <S.Photo
                src={mainPhoto}
                alt={t('name', { ns: 'main' }) + ', ' + t('position', { ns: 'main' })}
              />
            </S.PhotoWrapper>
            <S.InfoWrapper>
              <S.Name as="h1">{t('name', { ns: 'main' })}</S.Name>
              <S.MainTitle>
                <p> {t('position', { ns: 'main' })}</p>
                <Typewriter
                  options={{
                    strings: [`${t('position', { ns: 'main' })}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </S.MainTitle>
            </S.InfoWrapper>
            <S.ButtonWrapper>
              <Button>
                <S.NavLink to={'contacts'} smooth={true} aria-label={t('sendButton', { ns: 'main' })}>
                  <Icon id={'send'} height={'20'} width={'25'} viewBox={'0 0 20 20'} aria-hidden={true} focusable={false} />
                  {t('sendButton', { ns: 'main' })}
                </S.NavLink>
              </Button>

              <Button variant={'outlined'}>
                <>
                  <Icon id={'save'} height={'20'} width={'20'} viewBox={'0 0 20 20'} aria-hidden={true} focusable={false} />
                  <a
                    href={'https://drive.google.com/file/...'}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    aria-label={t('downloadButton', { ns: 'main' })}
                  >
                    {t('downloadButton', { ns: 'main' })}
                  </a>
                </>
              </Button>
            </S.ButtonWrapper>
          </S.MainWrapper>
        </Fade>
      </Container>
    </S.Main>
  )
}
