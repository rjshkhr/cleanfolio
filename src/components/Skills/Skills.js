import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='skills' id='skills'>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={uniqid()} className='skill'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
