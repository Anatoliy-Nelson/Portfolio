import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'
import { Button } from 'components'
import { Link } from 'react-scroll'

const Main = styled.section`
  padding-top: 130px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media ${theme.media.tablet} {
    padding-top: 70px;
  }
  @media ${theme.media.mobile} {
    padding-top: 50px;
  }
  @media ${theme.media.xs} {
    padding-top: 40px;
    min-height: unset;
  }
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 3fr 2fr;
  column-gap: 50px;
  align-content: center;
  }
  @media ${theme.media.tablet} {
    justify-content: center;
    grid-template-columns: unset;
    grid-auto-rows: unset;
    row-gap: 40px;
  }
 @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
  @media ${theme.media.xs} {
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding: 0 15px;
  }
`
const PhotoWrapper = styled.div`
  margin: 0 auto;
 grid-row-start: 1;
  grid-row-end: 3;
  @media ${theme.media.tablet} {
    grid-row-start: unset;
    grid-row-end: unset;
  }
  @media ${theme.media.mobile} {
    max-width: 300px;
    margin: 0 auto;
  }
  @media ${theme.media.xs} {
    max-width: 250px;
    margin: 0 auto;
  }
`
const Photo = styled.img`
  position: relative;
  max-width: 410px;
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: var(--shadow-main);
  @media ${theme.media.mobile} {
    max-width: 300px;
  }
  @media ${theme.media.xs} {
    max-width: 250px;
 }
`

const Name = styled.h2`
  ${font({ color: 'var(--color-accent)', weight: 800, max: 50, min: 34 })};
  @media ${theme.media.xs} {
    font-size: clamp(28px, 6vw, 34px);
 }
`

const MainTitle = styled.h1`
  ${font({ weight: 700, max: 38, min: 30 })};
  padding-top: 30px;
  p {
    display: none;
  }
  @media ${theme.media.xs} {
    font-size: clamp(24px, 5vw, 30px);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding-top: 20px;
  width: 100%;
  ${Button} {
    &:last-child {
      background-color: var(--color-primaryBg);
    }
  }

  @media ${theme.media.tablet} {
    padding-top: 0;
  }
 @media ${theme.media.mobile} {
    gap: 20px;
  }
  @media ${theme.media.xs} {
    gap: 15px;
    flex-direction: column;
    align-items: center;
  }
`

const InfoWrapper = styled.div`
  display: grid;
  align-content: center;
  @media ${theme.media.tablet} {
    grid-row-start: 1;
  }
  @media ${theme.media.xs} {
    text-align: center;
  }
`

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 12px;
`

export const S = { Main, MainWrapper, Photo, InfoWrapper, Name, MainTitle, ButtonWrapper, PhotoWrapper, NavLink }
