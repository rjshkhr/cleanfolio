import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, social } = about

  return (
    <section className='about' id='about'>
      <h1>
        Hi, I am <span className='about__name'>{name}.</span>
      </h1>
      <h3 className='about__role'>A {role}.</h3>
      <p className='about__desc'>{description && description}</p>
      <div className='about__contact'>
        <button type='button' className='btn'>
          Resume
        </button>
        {social.github && (
          <a href={social.github}>
            <GitHubIcon />
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin}>
            <LinkedInIcon />
          </a>
        )}
      </div>
    </section>
  )
}

export default About
