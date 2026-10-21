import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, tagline, role, description, resume, social } = about

  return (
    <div className='about'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {tagline && <p className='about__tagline'>{tagline}</p>}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact'>
        {resume && (
          <>
            <a
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn--solid'
            >
              View resume
              <ArrowOutwardIcon className='btn__icon btn__icon--arrow' />
            </a>
            <a
              href={resume}
              download='Jonathan-Portillo-Resume.pdf'
              className='btn btn--ghost'
            >
              <FileDownloadOutlinedIcon className='btn__icon' />
              Download
            </a>
          </>
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
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
