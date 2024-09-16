import React from 'react';
import Swathi from '../../images/swathisamudrala.jpg'; // Ensure this path is correct
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import './HeroStyle.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <div id="about">
      <div className="hero-container">
        <div className="hero-bg">
          {/* Background content, if any */}
        </div>
        <div className="hero-inner-container">
          <div className="hero-left-container" id="Left">
            <div className="title">Hi, I am <br /> {Bio.name}</div>
            <div className="text-loop">
              I am a
              <span className="typewriter">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="subtitle">{Bio.description}</div>
            <a className="resume-button" href={Bio.resume} target='_blank' rel='noopener noreferrer'>Check Resume</a>
          </div>

          <div className="hero-right-container" id="Right">
            <img className="img" src={Swathi} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
