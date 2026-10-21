import { useContext, useEffect, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'
import { experience, projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  const links = [
    experience.length && { href: '#experience', label: 'Experience' },
    projects.length && { href: '#projects', label: 'Projects' },
    skills.length && { href: '#skills', label: 'Skills' },
    contact.email && { href: '#contact', label: 'Contact' },
  ].filter(Boolean)

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className='center nav'>
      <ul
        id='nav-list'
        className={`nav__list ${open ? 'nav__list--open' : ''}`}
      >
        {links.map(({ href, label }) => (
          <li key={href} className='nav__list-item'>
            <a
              href={href}
              onClick={() => setOpen(false)}
              className='link link--nav'
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={() => setOpen(!open)}
        className={`btn btn--icon nav__hamburger ${open ? 'is-open' : ''}`}
        aria-label={open ? 'close navigation' : 'open navigation'}
        aria-expanded={open}
        aria-controls='nav-list'
      >
        <span className='nav__bar' />
        <span className='nav__bar' />
      </button>

      {open && (
        <button
          type='button'
          className='nav__backdrop'
          aria-label='close navigation'
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
