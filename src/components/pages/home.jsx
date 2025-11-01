import React from "react";
import Hero from "../hero";
import Footer from "../footer";
import "./home.css";

const home = () => {
  const card = [
    {
      logo: "🏆",
      title: "Achievements",
      description: "Go2Steam was paricipate FTC Competition in Houston,Texas.",
    },
    {
      logo: "📸",
      title: "Documentation",
      description: "Go2Steam was paricipate FTC Competition in Houston,Texas.",
    },
    {
      logo: "❓",
      title: "About",
      description: "What is Go2steam robotic's team is actually?.",
    },
    {
      logo: '🎯',
      title: 'Stats',
      description: 'Our game history from the first season (PowerPlay) to (Decode)',
    },
    {
      logo: '👥',
      title: 'Members | gen-1',
      description: 'Members of Generation-1 Go2Steam.',
    },
    {
      logo: '👥',
      title: 'Members | gen-2',
      description: 'Members of Generation-2 Go2Steam.',
    },
    {
      logo: '✉️',
      title: 'Contact',
      description: 'Contact our friendly team 👌🏻',
    }
  ];
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <Hero />
      </section>

      <section className="main-content">
        <div className="card-container">
          {card.map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">{card.logo}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
};

export default home;
