import { SocialsWrapper } from './SocialsBar.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialsBar = () => {
  return (
    <SocialsWrapper>
      <a href="mailto:dylan@dylanalmond.net" aria-label="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://github.com/DylanAlmond" aria-label="Github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/dylan-almond-a36a76251" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </SocialsWrapper>
  )
}

export default SocialsBar