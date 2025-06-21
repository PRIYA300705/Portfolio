import { forwardRef } from "react"
import { Trophy } from "lucide-react"

const Achievements = forwardRef<HTMLElement>((props, ref) => {
  const achievements = [
    {
      category: "Competition Achievements",
      icon: <Trophy size={24} />,
      items: [
        {
          title: "Semi-finalist at TELEPORT 2.0",
          organization: "Tata Elxsi",
          year: "2024",
          description: "Designed an AI system to detect and neutralize unauthorized UAVs in critical zones, contributing to threat modeling, system design, and response automation. Earned a Pre-Placement Interview (PPI) from Tata Elxsi for reaching the semi-finals in a competitive evaluation.",
        },
        {
          title: "Semi-finalist at Arthneeti 4.0",
          organization: "IIM Nagpur",
          year: "2024",
          description: "Devised a strategic, data-driven roadmap to accelerate EV adoption in rural India through targeted financial models, inclusive infrastructure planning, and scalable policy integration. Our solution emphasized localized accessibility, MSME empowerment, and public-private synergy to foster a sustainable and economically viable electric mobility ecosystem.",
        },
        {
          title: "Finalist at Startup-Showdown",
          organization: "IIIT Naya Raipur",
          year: "2025",
          description: "Pitched FundBridge, an AI-driven platform connecting verified investors with startups. Offers flexible funding (equity, royalty, mentorship), AI-powered matching, and investor-initiated contact, ensuring transparency and efficiency. Empowers entrepreneurs and investors for impactful business growth.",
        },
        {
          title: "Finalist at KRIYETA 4.0",
          organization: "Acropolis Institute of Technology and Research, Indore",
          year: "2025",
          description: "Developed an AI-driven platform connecting farmers and retailers with NGOs. Forecasts surplus, matches donors with recipients based on needs, location, and shelf-life, providing tailored outputs for efficient food redistribution.",
        },
      ],
    },
  ]

  return (
    <section ref={ref} id="achievements" className="section achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="achievements-content">
          {achievements.map((category, index) => (
            <div key={index} className="achievement-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.category}</h3>
              </div>

              <div className="achievement-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="achievement-item">
                    <div className="achievement-content">
                      <h4 className="achievement-title">{item.title}</h4>
                      <p className="achievement-organization">{item.organization}</p>
                      <span className="achievement-year">{item.year}</span>
                      <p className="achievement-description">{item.description}</p>
                    </div>
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

Achievements.displayName = "Achievements"
export default Achievements
