import { Wrapper } from './Header.styled'
import SocialsBar from '../SocialsBar/SocialsBar'
import Logo from '../Logo/Logo'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

type Props = {
  toggleSwitch: () => void,
  mode: string
}

export const Header = ({ toggleSwitch, mode }: Props) => {
  return (
    <Wrapper>
      <div>
        <Logo />
      </div>

      <div>
        <ThemeSwitch
          toggleSwitch={toggleSwitch}
          mode={mode}
        />
      </div>

      <div>
        <SocialsBar />
      </div>
    </Wrapper>
  )
}

export default Header
