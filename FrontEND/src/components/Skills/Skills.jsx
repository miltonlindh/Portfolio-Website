import styles from './Skills.styles.module.css';
import htmlLogo from '../../assets/Icons/html.logo.png';
import cssLogo from '../../assets/Icons/css.logo.png';
import jsLogo from '../../assets/Icons/js.logo.png';
import reactLogo from '../../assets/Icons/react.logo.png';
import tailWindLogo from '../../assets/Icons/tailwind.logo.png';
import reduxLogo from '../../assets/Icons/redux.logo.png';
import sassLogo from '../../assets/Icons/sass.logo.png';
import SkillList from '../../common/SkillList';

// Lists of the coding languages, libraries, and frameworks I know
function Skills() {
    return (
          /* Easy to add new skills by copying an existing line,
             changing the name, and adding a new image */
        <section id="skills" className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={htmlLogo} skill="HTML" />
                <SkillList src={cssLogo} skill="CSS" />
                <SkillList src={jsLogo} skill="JavaScript" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={reactLogo} skill="React" />
                <SkillList src={tailWindLogo} skill="Tailwind CSS" />
                <SkillList src={sassLogo} skill="SASS" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={reduxLogo} skill="Redux" />
            </div>
        </section>
    );
}

export default Skills;
