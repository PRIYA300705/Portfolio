import { forwardRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "QuickInvoice",
      description:
        "A modern, responsive invoice generator built with React 18 and Vite. Features real-time invoice creation, instant PDF export, professional templates, and clean Tailwind CSS styling with seamless client-side PDF generation and intuitive user experience.",
      technologies: ["React 18", "Vite", "Tailwind CSS", "html2pdf.js", "Lucide React Icons"],
      image: "/QuickInvoice_frontpage.jpg",
      liveDemo: "https://quickinvoice-invoicegenerator.netlify.app/",
      github: "https://github.com/PRIYA300705/QuickInvoice",
    },
    {
      id: 2,
      title: "Breast Cancer Classification using CNN",
      description:
        "A deep learning model built with TensorFlow/Keras to classify mammographic images as benign or malignant. Features comprehensive image preprocessing with OpenCV and achieves accurate classification to assist medical professionals in early cancer detection.",
      technologies: ["Python", "TensorFlow/Keras", "OpenCV", "Pandas", "NumPy", "scikit-learn"],
      image: "/Breastcancermodelcover.JPG?height=250&width=400",
      liveDemo: null,
      github: "https://github.com/PRIYA300705/Breast_Cancer_Detection_CNN",
    },
    {
      id: 3,
      title: "Indian Cost Optimization - ML Model",
      description:
        "A machine learning solution using LightGBM regression to provide personalized savings recommendations for Indian households. Features Bayesian optimization, SHAP explainability, and accounts for Indian purchasing power parity.",
      technologies: ["LightGBM", "Bayesian Optimization", "SHAP", "Pandas", "NumPy", "scikit-learn"],
      image: "/CostOptimizationModel.jpg?height=250&width=400",
      liveDemo: null,
      github: "https://github.com/PRIYA300705/Cost_optimization_Machine_learning",
    },
    {
      id: 4,
      title: "The Good Gleen",
      description:
        "A web application connecting farmers, retailers, and NGOs through intelligent matching algorithms and secure authentication. Features seamless user experience with machine learning recommendations for agricultural supply chain optimization.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Python", "ESLint"],
      image: "/goodgleenfrontend.jpg?height=250&width=400",
      liveDemo: null,
      github: "https://github.com/PRIYA300705/The-Good-Gleen",
    },
    {
      id: 5,
      title: "GenAI Project: Context-Aware Chatbot Using GPT-2",
      description:
        "An intelligent chatbot generating human-like responses using pre-trained GPT-2 model with conversational context maintenance. Features interactive Colab interface and optional Streamlit GUI for enhanced user experience.",
      technologies: ["Python", "HuggingFace Transformers", "GPT-2", "Streamlit", "Google Colab"],
      image: "/GP2geniai.png?height=250&width=400",
      liveDemo: null,
      github: "https://github.com/PRIYA300705/GenAi_Chatbot",
    },
  ]

  return (
    <section ref={ref} id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = "Projects"
export default Projects
