import React from 'react'
import './Career.css'

const CareerCard = ({ experience }) => (
  <div className="career-card">
    <div className="career-header">
      <h3 className="career-title">{experience.title}</h3>
      <span className="career-date">{experience.date}</span>
    </div>

    <h4 className="career-company">{experience.company}</h4>

    {Array.isArray(experience.description) ? (
      <ul className="career-list">
        {experience.description.map((item) => (
          <li key={`${experience.id}-${item}`}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="career-description">{experience.description}</p>
    )}

    {experience.skills && experience.skills.length > 0 && (
      <div className="career-skills">
        {experience.skills.map((skill) => (
          <span key={`${experience.id}-${skill}`} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
)

export default CareerCard
