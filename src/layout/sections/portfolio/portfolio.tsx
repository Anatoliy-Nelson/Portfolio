import { Project } from './project'
import styled from 'styled-components'
import { Container, FlexWrapper, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import cardsPhoto from 'assets/portfolio/cards.webp'
import networkPhoto from 'assets/portfolio/network.webp'
import tasksPhoto from 'assets/portfolio/tasks.webp'
import homeStorePhoto from 'assets/portfolio/homeStore.webp'

export const Portfolio = () => {
 const { t } = useTranslation()

  const projects = [
    {
      name: 'Learning Platform',
      demo: 'https://it-inc-cards-eta.vercel.app/',
      code: 'https://github.com/Anatoliy-Nelson/cards-it-inc',
      photo: cardsPhoto,
      description: `${t('descriptionCards', { ns: 'portfolio' })}`,
    },
    {
      name: 'Friend Connect',
      demo: 'https://anatoliy-nelson.github.io/Friend-Connect/',
      code: 'https://github.com/Anatoliy-Nelson/Friend-Connect',
      photo: networkPhoto,
      description: `${t('descriptionSocialNetwork', { ns: 'portfolio' })}`,
    },
    {
      name: 'Check Flow',
      demo: 'https://anatoliy-nelson.github.io/CheckFlow/',
      code: 'https://github.com/Anatoliy-Nelson/CheckFlow',
      photo: tasksPhoto,
      description: `${t('descriptionCheckFlow', { ns: 'portfolio' })}`,
    },
    {
      name: 'Home Store',
      demo: 'https://home-store-rouge.vercel.app',
      code: 'https://github.com/Anatoliy-Nelson/Home-Store',
      photo: homeStorePhoto,
      description: `${t('descriptionHomeStore', { ns: 'portfolio' })}`,
    },
  ]

  return (
    <StyledPortfolio id={'portfolio'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'portfolio' })}</SectionTitle>
        <Fade>
          <FlexWrapper wrap={'wrap'} justify={'space-evenly'} gap={'20px'} align={'stretch'}>
            {projects.map((project) => (
              <Project
                name={project.name}
                key={project.name}
                description={project.description}
                demo={project.demo}
                code={project.code}
                photo={project.photo}
              />
            ))}
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  position: relative;
`
