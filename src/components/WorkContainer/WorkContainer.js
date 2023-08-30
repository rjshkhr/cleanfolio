import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './WorkContainer.css'

const WorkContainer = ({ work }) => (
  <div className='work'>
    {work.logo && (
      <img id="logo-photo" src={work.logo} alt="logo" />
    )}
    <h3>{work.name}</h3>
    <p>{work.duration}</p>
    <p className='work__description'>{work.description}</p>
    {work.stack && (
      <ul className='work__stack'>
        {work.stack.map((item) => (
          <li key={uniqid()} className='work__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {work.sourceCode && (
      <a
        href={work.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {work.livePreview && (
      <a
        href={work.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default WorkContainer
