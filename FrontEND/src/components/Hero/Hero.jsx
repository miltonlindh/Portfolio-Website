

import { useDispatch, useSelector } from 'react-redux';//importerar hooks från react-redux
import { toggleTheme } from '../../features/theme/themeSlice';// importerar toggleTheme
// Import styles and icons
import styles from './Profile.Styles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';// importerar cv

// Fetch the current theme from Redux state and dispatch function
function Hero() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
// Set icons based on the current theme
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (

    <section id="hero" className={styles.container}>
    
      <div className={styles.colorModeContainer}>
      
        {/*Button to change the theme*/} 
        <img 
          className={styles.colorMode} 
          src={themeIcon} 
          alt="Color mode icon" 
          onClick={() => dispatch(toggleTheme())} 
        />
      </div>
      {/* Heading for my name */}
      <div className={styles.info}>
      <h1 className="name">Milton Lindh</h1>
       {/* Subtitle indicating I'm a frontend student*/}
        <h2>Frontend Student</h2>
        <span>
          {/*Links to my social media */}
          <div className={styles.socials}>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          </div>
        </span>
        <div className={styles.resume}>
        <a href={CV} download>{/* Link to download resume */}
          <button className="hover">
            Resume
          </button>
        </a>
        </div>
      </div>
      <p>Frontend student skilled in HTML, CSS, and JavaScript with experience in React. Eager to learn more about the profession.</p>
    </section>
  );
}

export default Hero;
