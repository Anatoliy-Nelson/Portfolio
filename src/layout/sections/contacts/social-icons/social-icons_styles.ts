import styled from 'styled-components'
import { theme } from 'styles/theme'

const IconsList = styled.ul`
  display: flex;
  gap: 50px;
  width: 100%;
  justify-content: center;
  padding-bottom: 20px;
  @media ${theme.media.mobile} {
    padding-bottom: 30px;
  }
`
const Icon = styled.li`
  &:hover {
    transform: scale(1.4);
    transition: var(--transitions);
  }
`

const Link = styled.a`
  color: var(--color-accent);
 
  &:hover {
    color: var(--color-font);
    transition: var(--transitions);
  }
`
export const S = { Icon, IconsList, Link }
