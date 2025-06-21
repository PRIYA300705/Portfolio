"use client"

import { forwardRef, useState } from "react"
import { Award } from "lucide-react"

const Certificates = forwardRef<HTMLElement>((props, ref) => {
  const [hoveredCertificate, setHoveredCertificate] = useState<number | null>(null)

  const certificates = [
    {
      id: 1,
      name: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      date: "2024",
      image: "/nptel certificate.jpg?height=300&width=400&text=NPTEL+Certificate",
      issuerLogo: "/NPTELlogo.jpeg",
      link: "https://drive.google.com/file/d/13XjGAA1zYGCjIhq-fzvSO9HCqtoDo5t0/view?usp=sharing",
    },
    {
      id: 2,
      name: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "2024",
      image: "/intro to frontend by mera.jpg?height=300&width=400&text=Meta+Certificate",
      issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      link: "https://drive.google.com/file/d/1IaAo5YxV4XOXp1vmnFJ8PWyVzmsbrhNC/view?usp=sharing",
    },
    {
      id: 3,
      name: "Computer Vision",
      issuer: "Vityarthi",
      date: "2024",
      image: "/CV by vityarthi.jpg?height=300&width=400&text=Vityarthi+Certificate",
      issuerLogo: "/vityarthi.jpg?height=50&width=100&text=Vityarthi",
      link: "https://drive.google.com/file/d/1pY8CLwok-E8jBk6njPCVSlY4YtDyjy8Y/view?usp=sharing",
    },
    {
      id: 4,
      name: "Generative AI with Large Language Models",
      issuer: "AWS & DeepLearning.AI",
      date: "2025",
      image: "/gen ai by aws coursera.jpg?height=300&width=400&text=AWS+Certificate",
      issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      link: "https://drive.google.com/file/d/1RQAR599nfKKO6qDWpNvb_OLyNKaTzK6_/view?usp=sharing",
    },
    {
      id: 5,
      name: "GEN AI Using IBM Watsonx",
      issuer: "IBM",
      date: "2025",
      image: "/ibmgenai.jpg?height=300&width=400&text=IBM+Certificate",
      issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      link: "https://drive.google.com/file/d/1wkyYNUj-jB629J0ZDjlgtL60KiJePr_z/view?usp=sharing",
    },
    {
      id: 6,
      name: "Full Stack Developer (MERN)",
      issuer: "MongoDB",
      date: "2025",
      image: "/MernMongoDb.jpg?height=300&width=400&text=MongoDB+Certificate",
      issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      link: "https://drive.google.com/file/d/13hAQAvBCk5ibFToRWPFlT4xEocUxgT3S/view?usp=sharing",
    },
  ]

  const handleCertificateClick = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <section ref={ref} id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="certificate-card"
              onClick={() => handleCertificateClick(certificate.link)}
              onMouseEnter={() => setHoveredCertificate(certificate.id)}
              onMouseLeave={() => setHoveredCertificate(null)}
              title="View Certificate"
            >
              <div className="certificate-image">
                <img src={certificate.image || "/placeholder.svg"} alt={`${certificate.name} Certificate`} />
                <div className="certificate-overlay">
                  <Award size={32} />
                  <p>View Certificate</p>
                </div>
              </div>

              <div className="certificate-content">
                <div className="certificate-header">
                  <img
                    src={certificate.issuerLogo || "/placeholder.svg"}
                    alt={`${certificate.issuer} Logo`}
                    className="issuer-logo"
                  />
                  <div className="certificate-info">
                    <h3 className="certificate-name">{certificate.name}</h3>
                    <p className="certificate-issuer">{certificate.issuer}</p>
                    <p className="certificate-date">{certificate.date}</p>
                  </div>
                </div>
              </div>

              {hoveredCertificate === certificate.id && <div className="certificate-tooltip">View Certificate</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Certificates.displayName = "Certificates"
export default Certificates
