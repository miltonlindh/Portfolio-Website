import styles from './Projects.styles.module.css';
import solarSystem from '../../assets/solar.system.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={solarSystem} 
          link="https://github.com/miltonlindh/Solaris"
          h3="Solaris"
          p="School Project"
        />
      </div>
    </section>
  );
}

export default Projects;
