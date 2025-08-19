import React from 'react'
import CareerSection from './components/Career/CareerSection'
import experience from './data/experience'
import education from './data/education'

const Career = () => {
    const hasExperience = Array.isArray(experience) && experience.length > 0
    const hasEducation = Array.isArray(education) && education.length > 0

    const isEmpty = !hasExperience && !hasEducation

    return (
        <div className="career-page" >
            {isEmpty ? (
                <div className="career-empty-block" style={{ textAlign: "center", margin: "3rem 0" }}>
                    <h2 className="career-empty-title" style={{ marginBottom: "1rem" }}>Career</h2>
                    <p className="career-empty" style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
                        🚧 This page is under construction. Check back soon!
                    </p>
                </div>
            ) : (
                <>
                    {hasExperience && (
                        <CareerSection
                            id="experience"
                            title="Experience"
                            data={experience}
                        />
                    )}

                    {hasEducation && (
                        <div style={{ marginTop: "3rem" }}>
                        <CareerSection
                            id="education"
                            title="Education"
                            data={education}
                        />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Career
