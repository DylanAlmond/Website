import { Wrapper, Copyright } from './Footer.styled'
import SocialsBar from '../SocialsBar/SocialsBar'
import Logo from '../Logo/Logo'

export const Footer = () => {
  return (
    <Wrapper>
      <Logo />
      <Copyright>{'@ '} {new Date().getFullYear()} Dylan Almond</Copyright>

      <SocialsBar />
    </Wrapper>
  )
}

export default Footer