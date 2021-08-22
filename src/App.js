import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  console.log(themeName)

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <p>Hello World</p>
      </main>
    </div>
  )
}

export default App
