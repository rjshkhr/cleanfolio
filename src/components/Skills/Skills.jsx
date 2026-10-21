import { skills } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <Reveal as='h2' className='section__title'>
        Skills
      </Reveal>
      <div className='skills__groups'>
        {skills.map(({ category, items }) => (
          <Reveal key={category} className='skills__group'>
            <h3 className='skills__category'>{category}</h3>
            <p className='skills__items'>{items.join(' · ')}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
