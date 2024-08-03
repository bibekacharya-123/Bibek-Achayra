import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";

import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import CV from "../../assets/bibek_cv[1].pdf";
import { useTheme } from "../../common/ThemeContext";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";

function Heros() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile pic of Bibek Acharya"
        />
        <img
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
          className={styles.colorMode}
        />
      </div>
      <div className={styles.info}>
        <h1>Bibek<br/>Acharya</h1>
        <h2>Mobile Application Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>With a passionate mobile application developer for commercial business.</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Heros;
