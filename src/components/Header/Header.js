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
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <nav className='center'>
        <ul className='center'>
          <li>
            <a href='#projects' className='link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#skills' className='link'>
              Skills
            </a>
          </li>
          <li>
            <a href='#contact' className='link'>
              Contact
            </a>
          </li>
        </ul>
        <button
          type='button'
          onClick={toggleTheme}
          className='center'
          aria-label='toggle theme'
        >
          {themeName === 'light' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
      </nav>
    </header>
  )
}

export default Header
