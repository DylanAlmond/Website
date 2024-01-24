import { ApolloProvider } from '@apollo/client'
import client from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './styles/theme'
import { Main } from './App.styled'
import GlobalStyle from './styles/globalstyles'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GreetingSection from './components/GreetingSection/GreetingSection'
import ContentSection from './components/ContentSection/ContentSection'
import { useEffect, useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const theme = mode === 'light' ? light : dark;

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark')
    }
  }, []);

  const toggleMode = () => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  };

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header
            toggleSwitch={toggleMode}
            mode={mode}
          />

          <Main>
            <GreetingSection />
            <ContentSection />
          </Main>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
