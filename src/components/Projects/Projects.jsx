import { projects } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <Reveal as='h2' className='section__title'>
        Projects
      </Reveal>

      <div className='projects__grid'>
        {projects.map((project) => (
          <Reveal key={project.name}>
            <ProjectContainer project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
