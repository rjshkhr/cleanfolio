import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
