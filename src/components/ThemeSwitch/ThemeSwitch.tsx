import { Wrapper, Button } from "./ThemeSwitch.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

type Props = {
  toggleSwitch: () => void,
  mode: string
}

const ThemeSwitch = ({ toggleSwitch, mode }: Props) => {
  const onCheck = () => {
    toggleSwitch();
  }

  return (
    <Wrapper>
      <Button type="button" onClick={onCheck} aria-label="Toggle Light/Dark Mode">
        <FontAwesomeIcon icon={mode === 'light' ? faMoon : faSun} />
      </Button>
    </Wrapper>
  )
}

export default ThemeSwitch