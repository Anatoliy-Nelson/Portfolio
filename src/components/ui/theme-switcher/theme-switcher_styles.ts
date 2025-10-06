import styled from 'styled-components'
import { Button } from 'components'

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${Button} {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.colors.secondaryBg};
    }
  }
`

export const S = {
  ThemeSwitcherWrapper
}