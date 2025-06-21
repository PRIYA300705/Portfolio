"use client"

import { forwardRef } from "react"
import { Download } from "lucide-react"

const Resume = forwardRef<HTMLElement>((props, ref) => {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1j5JvLKoram45opT_U92QabKFd8X03XV6/view?usp=sharing", "_blank")
  }

  return (
    <section ref={ref} id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>

        <div className="resume-content">
          <div className="resume-download">
            <button className="download-btn" onClick={handleDownloadResume}>
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
})

Resume.displayName = "Resume"
export default Resume
