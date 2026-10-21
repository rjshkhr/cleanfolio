import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className='skills__groups'>
        {skills.map(({ category, items }) => (
          <div key={category} className='skills__group'>
            <h3 className='skills__category'>{category}</h3>
            <p className='skills__items'>{items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
