import React from 'react'
import {Link} from 'react-router-dom'
import './hero.css'

const Hero = () => {
  return (
      <section className="hero">
        <div className="hero-content">
            <h1 className='hero-title'>Welcome to GO2STEAM</h1>
            <p className='hero-subtitle'>Robotic Team from Indonesia | TechnonaturaJogja.</p>

            <div className="hero-buttons">
                <Link to='/achievment' className='btn-primary'>View Achievment</Link>
                <Link to='/about' className='btn-secondary'>Learn More</Link>
            </div>
        </div>
      </section>
  )
}

export default Hero