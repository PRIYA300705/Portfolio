"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
  scrollToSection: (section: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { key: "about", label: "About" },
    { key: "resume", label: "Resume" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
    { key: "achievements", label: "Achievements" },
    { key: "certificates", label: "Certificates" },
    { key: "contact", label: "Contact" },
  ]

  const handleNavClick = (sectionKey: string) => {
    scrollToSection(sectionKey)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>PS</h2>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  className={`nav-link ${activeSection === item.key ? "active" : ""}`}
                  onClick={() => handleNavClick(item.key)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
