import { ApolloProvider } from '@apollo/client';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import { ActiveSectionProvider } from './context/activeSectionContext';
import client from './lib/apollo';
import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  useEffect(() => {
    document.body.dataset.mode = mode;
  }, [mode]);

  const toggleMode = () => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  };

  return (
    <ApolloProvider client={client}>
      <ActiveSectionProvider>
        <main className="min-h-dvh w-full overflow-x-hidden bg-background text-onPrimary transition-colors dark:bg-background-dark dark:text-onPrimary-dark">
          <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center scroll-smooth px-8">
            <Header />
            <Welcome />
            <Skills />
            <Experience />
            <Contact />
            <Footer />

            <ThemeToggle onClick={toggleMode} mode={mode} />
          </div>
        </main>
      </ActiveSectionProvider>
    </ApolloProvider>
  );
};

export default App;
