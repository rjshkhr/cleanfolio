import React from 'react'
import CareerCard from './CareerCard'
import './Career.css'

const CareerSection = ({ id, title, data }) => (
      <section id={id} className="section-career">
        <h2 className="section__title">{title}</h2>
  
        {data && data.length > 0 ? (
          <div className="career__grid">
            {data.map((item) => (
              <CareerCard key={item.id} experience={item} />
            ))}
          </div>
        ) : (
          <p className="career-empty">
            🚧 This section is under construction. Check back soon!
          </p>
        )}
      </section>
    )
  
export default CareerSection
