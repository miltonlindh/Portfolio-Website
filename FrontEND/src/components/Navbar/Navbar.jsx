import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    // State to track if the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect hook to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
            // If the scroll position is greater than 400, set isScrolled to true
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
      <ul>
         {/* Navigation links */}
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
