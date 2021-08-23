import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <section className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Skills />
      </main>
      <Footer />
    </section>
  )
}

export default App
