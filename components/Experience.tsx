import { forwardRef } from "react"
import { MapPin, Calendar, User } from "lucide-react"

const Experience = forwardRef<HTMLElement>((props, ref) => {
  const techStack = [
    // { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "ARIMA", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "LSTM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Prophet", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "BERT", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "TF-IDF", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    // {
    //   name: "Graph Neural Networks",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    // },
    {
      name: "Excel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    },
    { name: "Tableau", icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  ]

  return (
    <section ref={ref} id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-timeline-new">
          <div className="timeline-line"></div>

          <div className="experience-entry">
            <div className="experience-left">
              <div className="company-info">
                <a href="https://ingrade.io/" target="_blank" rel="noopener noreferrer" className="company-name">
                  Ingrade
                </a>
                <div className="job-details">
                  <div className="job-role">
                    <User size={16} />
                    Data Science Intern
                  </div>
                  <div className="job-location">
                    <MapPin size={16} />
                    Remote
                  </div>
                  <div className="job-date">
                    <Calendar size={16} />
                    (May 2025 to Present)
                  </div>
                </div>
                <a href="https://ingrade.io/" target="_blank" rel="noopener noreferrer" className="company-logo-link">
                  <img src="/images/InGradelogo.jpg" alt="Ingrade Logo" className="company-logo" />
                </a>
              </div>
            </div>

            <div className="experience-right">
              <div className="experience-content-box">
                <div className="experience-description">
                  Learning and working on advanced machine learning projects involving climate modeling, fintech
                  systems, and disaster management through comprehensive case studies. Contributing to the development
                  of predictive solutions using ARIMA, LSTM, and Prophet algorithms while creating interactive
                  dashboards. Gaining hands-on experience in implementing NLP sentiment analysis with BERT, building
                  Graph Neural Networks, and integrating AI models with real-world applications across healthcare and
                  social network domains.
                </div>

                <div className="separator-line"></div>

                <div className="tech-stack-section">
                  <h4>Technologies Used:</h4>
                  <div className="tech-stack-grid">
                    {techStack.map((tech, index) => (
                      <div key={index} className="tech-item">
                        <img src={tech.icon || "/InGradelogo.jpg"} alt={tech.name} className="tech-icon" />
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Experience.displayName = "Experience"
export default Experience
