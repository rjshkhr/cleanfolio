import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <button type='button' onClick={toggleNavList}>
            <a href='#projects' className='link link--nav'>
              Projects
            </a>
          </button>
        </li>

        <li className='nav__list-item'>
          <button type='button' onClick={toggleNavList}>
            <a href='#skills' className='link link--nav'>
              Skills
            </a>
          </button>
        </li>

        <li className='nav__list-item'>
          <button type='button' onClick={toggleNavList}>
            <a href='#contact' className='link link--nav'>
              Contact
            </a>
          </button>
        </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='center btn btn--icon'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
