import { forwardRef } from "react"

const Skills = forwardRef<HTMLElement>((props, ref) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
    },
    {
      title: "General Tools & Concepts",
      skills: [
        {
          name: "Machine Learning",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        {
          name: "Data Structures and Algorithms",
          icon: "/dsalogo.png",
        },
        {
          name: "Computer Networks",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
        },
        { name: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "DBMS", icon: "/DBMS.png" },
        { name: "OOPs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        {
          name: "Operating Systems",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        { name: "Computer Vision", icon: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black_.png" },
        { name: "Data Visualization", icon: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" },
        {
          name: "Jupyter Notebook",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        },
        { name: "Google Colab", icon: "https://colab.research.google.com/img/colab_favicon_256px.png" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        {
          name: "Microsoft Excel",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
        },
        { name: "Tableau", icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
      ],
    },
    {
      title: "Web Development & Databases",
      skills: [
        { name: "SQL (MySQL)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/tailwind.png",
        },
        { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "Scikit-learn",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        { name: "OpenCV", icon: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black_.png" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", icon: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" },
        { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      ],
    },
  ]

  return (
    <section ref={ref} id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-content-horizontal">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-horizontal">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-horizontal-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item-horizontal">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name-horizontal">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Skills.displayName = "Skills"
export default Skills
