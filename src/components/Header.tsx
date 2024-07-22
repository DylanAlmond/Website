import { motion } from 'framer-motion';
import { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import Logo from './Logo';
import Socials from './Socials';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Link {
  name: string;
  tag: string;
}

const links: Link[] = [
  {
    name: 'Home',
    tag: '#home',
  },
  {
    name: 'Skills',
    tag: '#skills',
  },
  {
    name: 'Experience',
    tag: '#experience',
  },
  {
    name: 'Contact',
    tag: '#contact',
  },
];

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const [sideMenuVisible, setSideMenuVisible] = useState<boolean>(false);

  const handleClick = (link: Link) => {
    setTimeOfLastClick(Date.now());
    setActiveSection(link.name);

    if (sideMenuVisible) setSideMenuVisible(false);
  };

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full max-w-screen-lg flex-col bg-background px-8 pb-4 pt-8 transition-colors dark:bg-background-dark">
        <nav className="flex items-center justify-between">
          <div className="flex flex-1 gap-4">
            <Logo />
          </div>

          <div className="hidden gap-5 lg:flex">
            {links.map((l: Link) => (
              <a
                key={l.name}
                href={l.tag}
                className={l.name === activeSection ? 'active' : ''}
                onClick={() => handleClick(l)}
              >
                {l.name}
              </a>
            ))}
          </div>

          <div className="hidden flex-1 justify-end gap-4 lg:flex">
            <Socials />
          </div>

          <div className="flex flex-1 justify-end gap-4 lg:hidden">
            <button
              onClick={() => setSideMenuVisible(true)}
              aria-label="Open Menu"
            >
              <FontAwesomeIcon
                className="text-3xl text-onSecondary dark:text-onSecondary-dark"
                icon={faBars}
              />
            </button>
          </div>
        </nav>
      </header>

      <motion.div
        className="fixed top-0 z-50 h-full w-full bg-background p-8 lg:hidden dark:bg-background-dark"
        animate={sideMenuVisible ? 'open' : 'closed'}
        initial={{ left: '100%' }}
        variants={{ open: { left: 0 }, closed: { left: '100%' } }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <nav className="flex flex-col justify-start gap-8">
          <div className="flex justify-between">
            <Logo />
            <button
              onClick={() => setSideMenuVisible(false)}
              aria-label="Close Menu"
            >
              <FontAwesomeIcon
                className="text-3xl text-onSecondary dark:text-onSecondary-dark"
                icon={faXmark}
              />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {links.map((l: Link) => (
              <a
                key={l.name}
                href={l.tag}
                className={l.name === activeSection ? 'active' : ''}
                onClick={() => handleClick(l)}
              >
                {l.name}
              </a>
            ))}
          </div>

          <div className="flex flex-1 gap-4 *:justify-end">
            <Socials />
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Header;
