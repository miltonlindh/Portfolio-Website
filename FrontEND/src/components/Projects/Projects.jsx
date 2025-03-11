import styles from './Projects.styles.module.css';
import solarSystem from '../../assets/solar.system.png';
import ProjectCard from '../../common/ProjectCard';
import Taverna from '../../assets/tavernalogo.png'
import ParmarPoesi from "../../assets/Parmar&poesi.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/*Projectcards, easy to add more*/}
        <ProjectCard 
          src={solarSystem} 
          link="https://github.com/miltonlindh/Solaris"
          h3="Solaris"
          p="School Project"
        />
        <ProjectCard 
          src={Taverna} 
          link="https://github.com/Martensven/restaurang"
          h3="Taverna"
          p="Group Project"
        />
        <ProjectCard 
          src={ParmarPoesi } 
          link="https://github.com/miltonlindh/Solaris"
          h3="Pärmar&Poesi"
          p="Group Project"
        />
  
      </div>
    </section>
  );
}

export default Projects;
