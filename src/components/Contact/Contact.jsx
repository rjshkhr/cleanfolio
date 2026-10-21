import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p className='contact__text'>
        Open to full-time backend and developer-tooling roles.
      </p>
      <a href={`mailto:${contact.email}`} className='link--text contact__link'>
        {contact.email}
      </a>
    </section>
  )
}

export default Contact
