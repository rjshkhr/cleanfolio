import uniqid from 'uniqid'
import './EducationContainer.css'

const EducationContainer = ({ education }) => (
    <div className='education'>
        {education.logo && (
            <img id="image-photo" src={education.logo} alt="images" />
        )}
        <h3>{education.name}</h3>

        <p className='education__grade'>{education.grade}</p>
        <p className='education_duration'>{education.duration}</p>
        {education.stack && (
            <ul className='education__stack'>
                {education.stack.map((item) => (
                    <li key={uniqid()} className='education__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}
    </div>
)

export default EducationContainer
