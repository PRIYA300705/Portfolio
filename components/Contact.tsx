"use client"

import { forwardRef } from "react"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const Contact = forwardRef<HTMLElement>((props, ref) => {
  const contactButtons = [
    {
      label: "Personal: priyasah3005@gmail.com",
      icon: <Mail size={20} />,
      action: () => window.open("mailto:priyasah3005@gmail.com"),
      type: "email",
    },
    {
      label: "University Email: priyasah2022@vitbhopal.ac.in",
      icon: <Mail size={20} />,
      action: () => window.open("mailto:priyasah2022@vitbhopal.ac.in"),
      type: "email",
    },
    {
      label: "Phone: +91 84484 18499",
      icon: <Phone size={20} />,
      action: () => window.open("tel:+918448418499"),
      type: "phone",
    },
    {
      label: "LinkedIn",
      icon: <Linkedin size={20} />,
      action: () => window.open("https://www.linkedin.com/in/priya-sah-4a4702250", "_blank"),
      type: "social",
    },
    {
      label: "GitHub",
      icon: <Github size={20} />,
      action: () => window.open("https://github.com/PRIYA300705", "_blank"),
      type: "social",
    },
  ]

  return (
    <section ref={ref} id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-buttons-vertical">
          {contactButtons.map((button, index) => (
            <button key={index} className={`contact-button-vertical ${button.type}`} onClick={button.action}>
              {button.icon}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
})

Contact.displayName = "Contact"
export default Contact
