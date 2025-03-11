

import PropTypes from 'prop-types';

//Define the skilllist component using destructuring of props
function SkillList({src, skill })  {
  return (
    //Use span to group icon and text
    <span>
    <img src={src} alt="icons"/>
    <p>{skill}</p>
  </span>
  )
}
//Works the sam way as in ProjectCard.jsx but for skilllist instead
SkillList.propTypes = {
  src: PropTypes.string.isRequired, //Ensure 'src' is a string and is and is required
  skill: PropTypes.string.isRequired, // Ensure 'skill' is a string and is required
};

export default SkillList;