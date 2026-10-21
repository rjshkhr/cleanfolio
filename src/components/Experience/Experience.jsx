import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__list'>
        {experience.map((job) => (
          <div key={`${job.company}-${job.dates}`} className='experience__item'>
            <h3>{job.role}</h3>
            <p className='experience__meta'>
              {job.company} · {job.location} · {job.dates}
            </p>
            <ul className='experience__highlights'>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
