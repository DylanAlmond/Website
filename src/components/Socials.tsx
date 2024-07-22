import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = () => {
  return (
    <div className="flex gap-6 lg:gap-4">
      <a href="mailto:dylan@dylanalmond.net" aria-label="Email">
        <FontAwesomeIcon className="text-3xl lg:text-xl" icon={faEnvelope} />
      </a>
      <a href="https://github.com/DylanAlmond" aria-label="Github">
        <FontAwesomeIcon className="text-3xl lg:text-xl" icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/dylan-almond-a36a76251"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon className="text-3xl lg:text-xl" icon={faLinkedin} />
      </a>
    </div>
  );
};

export default Socials;
