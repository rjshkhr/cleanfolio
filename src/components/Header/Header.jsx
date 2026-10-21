import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { title } = header

  return (
    <header className='header center'>
      <h3>
        <a href='#top' className='link' aria-label='Back to top'>
          {title}
        </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
