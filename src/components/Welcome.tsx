import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSectionInView from '../hooks/useSectionInView';

const Welcome = () => {
  const { ref } = useSectionInView('Home');

  return (
    <div
      id="home"
      ref={ref}
      className="flex h-dvh max-h-screen w-full flex-col justify-center pt-20"
    >
      <div className="flex flex-col gap-4">
        <div className="text-[120px] font-medium leading-none text-primary dark:text-primary-dark">
          Hello,
        </div>
        <p className="max-w-[433px] text-2xl">
          I'm Dylan, a web/software developer located in Southampton, UK.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 translate-x-[-50%]">
        <FontAwesomeIcon
          className="text-4xl text-onSecondary dark:text-onSecondary-dark"
          icon={faChevronDown}
        />
      </div>
    </div>
  );
};

export default Welcome;
