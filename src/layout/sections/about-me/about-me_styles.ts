import styled from 'styled-components'
import { SectionText } from 'components'
import { theme } from 'styles/theme'

const AboutMe = styled.section`
  position: relative;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 50px;
  align-items: center;

  ${SectionText} {
    display: grid;
  }
  @media ${theme.media.tablet} {
    grid-template-columns: 2fr 1fr;
  }
  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    ${SectionText} {
      text-align: center;
    }
  }
`
const Photo = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 24px;
 box-shadow: var(--shadow-main);
  object-fit: cover;
  height: auto;
  display: block;
  
  @media ${theme.media.mobile} {
    width: 80%;
    margin: 0 auto;
    max-width: none;
  }
`

export const S = { AboutMe, Wrapper, Photo }
