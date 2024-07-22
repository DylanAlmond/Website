import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSectionInView from '../hooks/useSectionInView';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { ref } = useSectionInView('Contact', 1);

  return (
    <div
      id="contact"
      ref={ref}
      className="flex w-full flex-col items-center gap-12 rounded-2xl bg-surface py-12 dark:bg-surface-dark"
    >
      <p className="text-5xl font-medium">Contact</p>

      <div className="m-auto flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="flex gap-4">
          <FontAwesomeIcon
            className="text-xl text-onSecondary dark:text-onSecondary-dark"
            icon={faPhone}
          />
          <a
            className="text-primary opacity-100 dark:text-primary-dark"
            href="tel:+447900414970"
            aria-label="Phone"
          >
            +44 07900 414 970
          </a>
        </div>

        <div className="flex gap-4">
          <FontAwesomeIcon
            className="text-xl text-onSecondary dark:text-onSecondary-dark"
            icon={faEnvelope}
          />
          <a
            className="text-primary opacity-100 dark:text-primary-dark"
            href="mailto:dylan@dylanalmond.net"
            aria-label="Email"
          >
            dylan@dylanalmond.net
          </a>
        </div>

        <div className="flex gap-4">
          <FontAwesomeIcon
            className="text-xl text-onSecondary dark:text-onSecondary-dark"
            icon={faLinkedin}
          />
          <a
            className="text-primary opacity-100 dark:text-primary-dark"
            href="https://www.linkedin.com/in/dylan-almond-a36a76251"
            aria-label="LinkedIn"
          >
            Dylan Almond
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
