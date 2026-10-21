import { experience } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Experience.css'

const renderBold = (text) =>
  text
    .split('**')
    .map((part, i) => (i % 2 ? <strong key={part}>{part}</strong> : part))

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <Reveal as='h2' className='section__title'>
        Experience
      </Reveal>

      <div className='experience__list'>
        {experience.map((job, i) => (
          <Reveal
            key={`${job.company}-${job.dates}`}
            className='experience__item'
            delay={i * 90}
          >
            <span className='experience__dates'>{job.dates}</span>
            <div>
              <h3>{job.role}</h3>
              <p className='experience__meta'>
                {job.company} · {job.location}
              </p>
              <ul className='experience__highlights'>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{renderBold(highlight)}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience
