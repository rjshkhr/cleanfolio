import { contact } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <Reveal as='h2' className='section__title'>
        Contact
      </Reveal>
      <Reveal delay={100}>
        <p className='contact__text'>
          Open to full-time backend and developer-tooling roles.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className='link--text contact__link'
        >
          {contact.email}
        </a>
      </Reveal>
    </section>
  )
}

export default Contact
