import { useContext, useEffect } from 'react'
import ReactGA from 'react-ga'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-04WBZHWT9X')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Form />
      </main>

      <ScrollToTop />
      <Footer />
      <img
        src='https://gpvc.arturio.dev/nmpereiraPortfolio'
        style={{ opacity: 0 }}
        alt='track'
      />
    </div>
  )
}

export default App
