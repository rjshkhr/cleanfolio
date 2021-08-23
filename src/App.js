import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <About />
      </main>
    </div>
  )
}

export default App
