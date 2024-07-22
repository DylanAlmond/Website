import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ThemeToggleProps {
  onClick: () => void;
  mode: 'light' | 'dark';
}

const ThemeToggle = ({ onClick, mode }: ThemeToggleProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      aria-label="Toggle Theme"
      onClick={handleClick}
      className="align-center fixed bottom-8 right-8 flex h-12 w-12 justify-center rounded-full bg-primary dark:bg-primary-dark"
    >
      <FontAwesomeIcon
        className="text-2xl text-onPrimary dark:text-onPrimary-dark"
        icon={mode === 'light' ? faMoon : faSun}
      />
    </button>
  );
};

export default ThemeToggle;
