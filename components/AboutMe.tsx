import { forwardRef } from "react"

const AboutMe = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              Hi, I'm <span className="highlight">Priya Sah</span>
            </h1>
            <h2 className="about-subtitle">Computer Science with specialization in AI and ML student</h2>
            <p className="about-description">
              I am a final-year B.Tech Computer Science student specializing in Artificial Intelligence and Machine
              Learning at VIT Bhopal University. My core interests lie in Data Science, Machine Learning, and Software
              Development, with a strong foundation built through academic projects and hands-on experience. Driven by
              curiosity and a passion for innovation, I am constantly exploring how technology can solve real-world
              problems. I believe that with dedication, consistency, and a growth mindset, any challenge can be
              transformed into an opportunity. I am always open to collaboration and learning in dynamic, fast-paced
              environments.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder-small">
              <img
                src="/images/priya-profile-new.png"
                alt="Priya Sah - AI/ML Student & Data Science Intern"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutMe.displayName = "AboutMe"
export default AboutMe
