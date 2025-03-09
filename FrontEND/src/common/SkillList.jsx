

import PropTypes from 'prop-types';

//definera komponenten SkillList med destruturering av props
function SkillList({src, skill })  {
  return (
    //använd span för att gruppen ikon och text
    <span>
    <img src={src} alt="icons"/>
    <p>{skill}</p>
  </span>
  )
}
//fungerar lika som i ProjectCard.jsx bara för SkillList istället
SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillList;