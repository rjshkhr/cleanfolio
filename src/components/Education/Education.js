import uniqid from 'uniqid'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  if (!education || !education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>
      <div className='education__list'>
        {education.map((item) => (
          <div key={uniqid()} className='education__item'>
            <div className='education__item-header'>
              <h3 className='education__degree'>{item.degree}</h3>
              {item.status && (
                <span className='education__status'>{item.status}</span>
              )}
            </div>
            <p className='education__school'>{item.school}</p>
            {item.concentration && (
              <p className='education__concentration'>{item.concentration}</p>
            )}
            {item.description && (
              <p className='education__description'>{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
