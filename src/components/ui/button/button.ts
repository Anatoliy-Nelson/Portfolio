import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

type Props = {
  variant?: 'primary' | 'outlined' | 'text'
  active?: boolean
}

export const Button = styled.button<Props>`
  position: relative;
  background-color: var(--color-accent);
  padding: 12px 26px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${font({ color: 'var(--color-primaryBg)', weight: 700, max: 18, min: 14 })};

  a {
    color: var(--color-primaryBg);
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-main);
    transition: var(--transitions);
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css<Props>`
      background-color: transparent;
      outline: 2px solid var(--color-accent);

      a {
        color: var(--color-accent);
      }
    `}
  @media ${theme.media.tablet} {
    &:hover {
      transform: scale(1);
    }
  }
  ${(props) =>
    props.variant === 'text' &&
    css<Props>`
      background-color: transparent;
      font-size: 18px;
      padding: 8px;
      color: var(--color-font);
      &:active {
        color: var(--color-accent);
      }
      @media ${theme.media.tablet} {
        font-size: 16px;
      }
    `}
  ${(props) =>
    props.active === true &&
    css<Props>`
      color: var(--color-accent);
    `}
`
