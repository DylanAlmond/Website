import Logo from './Logo';

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 py-12 pb-8 lg:flex-row lg:gap-2">
      <Logo />
      <p className="text-onSecondary dark:text-onSecondary-dark">
        {`@ ${new Date().getFullYear()} Dylan Almond`}
      </p>
    </div>
  );
};

export default Footer;
