import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkIcon from '@mui/icons-material/Link'
import TwitterIcon from '@mui/icons-material/Twitter'
import { FaDiscord } from 'react-icons/fa'
import { about } from '../../portfolio'
// import pdf from '../Pdf/nmpereira_cv.pdf'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}{' '}
            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon />
              </a>
            )}
            {social.discord && (
              <a
                href={social.discord}
                aria-label='discord'
                className='link link--icon'
              >
                <FaDiscord />
              </a>
            )}{' '}
            {social.linktree && (
              <a
                href={social.linktree}
                aria-label='linktree'
                className='link link--icon'
              >
                <LinkIcon />
              </a>
            )}{' '}
            {social.calendly && (
              <a
                href={social.calendly}
                aria-label='calendly'
                className='link link--icon'
              >
                <CalendarMonthIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
