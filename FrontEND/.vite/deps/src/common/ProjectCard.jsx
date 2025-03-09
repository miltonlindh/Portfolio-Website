import PropTypes from 'prop-types';

function ProjectCard({ 
  h3 = "Untitled Project", 
  src = "/default-image.png", 
  link = "#", 
  p = "No description available." 
}) {
  return (
    <div className="project-card">
      <h3>{h3}</h3>
      <img src={src} alt={h3} />
      <p>{p}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

// Define PropTypes for validation
ProjectCard.propTypes = {
  h3: PropTypes.string,
  src: PropTypes.string,
  link: PropTypes.string,
  p: PropTypes.string,
};

export default ProjectCard;
