"use client"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import Resume from "@/components/Resume"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Certificates from "@/components/Certificates"
import Contact from "@/components/Contact"
import Achievements from "@/components/Achievements"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isLoading, setIsLoading] = useState(true)

  const aboutRef = useRef<HTMLElement>(null)
  const resumeRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const certificatesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const achievementsRef = useRef<HTMLElement>(null)

  const sectionRefs = {
    about: aboutRef,
    resume: resumeRef,
    projects: projectsRef,
    skills: skillsRef,
    experience: experienceRef,
    education: educationRef,
    achievements: achievementsRef,
    certificates: certificatesRef,
    contact: contactRef,
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs)
      const scrollPosition = window.scrollY + 100

      for (const [key, ref] of sections) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionKey: string) => {
    const ref = sectionRefs[sectionKey as keyof typeof sectionRefs]
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading Portfolio...</p>
      </div>
    )
  }

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <AboutMe ref={aboutRef} />
        <Resume ref={resumeRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Experience ref={experienceRef} />
        <Education ref={educationRef} />
        <Achievements ref={achievementsRef} />
        <Certificates ref={certificatesRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  )
}
