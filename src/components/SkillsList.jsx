import skills from "../skills.json";
import Skill from "./Skill";

const SkillsList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill, i) => {
        return <Skill
          color={skill.color}
          skill={skill.skill}
          level={skill.level}
        />;
      })}
    </div>
  );
};

export default SkillsList;