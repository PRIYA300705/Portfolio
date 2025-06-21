import { forwardRef } from "react"
import { Calendar, Award } from "lucide-react"

const Education = forwardRef<HTMLElement>((props, ref) => {
  const education = [
    {
      id: 1,
      institution: "VIT Bhopal University",
      program:
        "Bachelor's in Technology in Computer Science with specialization in Artificial Intelligence and Machine Learning",
      grade: "CGPA: 8.68",
      date: "2022 - Present",
      logo: "/vit-logo.png?height=60&width=60&text=VIT",
      side: "left",
    },
    {
      id: 2,
      institution: "St. Joseph's School, NTPC Kahalgaon, Bhagalpur, Bihar, India",
      program: "Class 12",
      subject: "PCM (Physics, Chemistry, Mathematics)",
      grade: "Percentage: 88.6%",
      date: "2022",
      logo: "/st-joseph-bihar-logo.png?height=60&width=60&text=SJS",
      side: "right",
    },
    {
      id: 3,
      institution: "St. Joseph's School, Shaktinagar, Sonebhadra, Uttar Pradesh, India",
      program: "Class 10",
      grade: "Percentage: 90%",
      date: "2020",
      logo: "/st-joseph-up-logo.png?height=60&width=60&text=SJS",
      side: "left",
    },
  ]

  return (
    <section ref={ref} id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-timeline-new">
          <div className="timeline-line"></div>

          {education.map((edu) => (
            <div key={edu.id} className={`education-entry ${edu.side}`}>
              <div className="education-content-new">
                <img src={edu.logo || "/placeholder.svg"} alt={`${edu.institution} Logo`} className="education-logo" />
                <div className="education-info">
                  <h3 className="institution-name">{edu.institution}</h3>
                  <p className="program-name">{edu.program}</p>
                  {edu.subject && <p className="subject-name">{edu.subject}</p>}
                  <div className="education-meta-new">
                    <div className="education-grade">
                      <Award size={16} />
                      {edu.grade}
                    </div>
                    <div className="education-date">
                      <Calendar size={16} />
                      {edu.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Education.displayName = "Education"
export default Education
