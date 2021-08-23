import { useContext } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'
import { header } from '../../portfolio'
import './Header.css'

const Header = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const { homepage, title } = header

  return (
    <header className='header'>
      <h4>
        <a href={homepage} className='link logo'>
          {title}
        </a>
      </h4>
      <nav>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <button type='button' onClick={toggleTheme}>
          {themeName === 'light' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
      </nav>
    </header>
  )
}

export default Header
