import { useState } from "react";
import About from "./About";
const AboutCard = () => {
  const [skillStatus, updateSkillStatus] = useState("");
  const [experienceStatus, updateExperienceStatus] = useState("");
  const [educationStatus, updateEducationStatus] = useState("");
  const skillHandler = () => {
    updateSkillStatus("true");
    console.log(skillStatus);
    return (
      <div>
        <div>
          <h6>Frontend/Backend</h6>
          <span>WelloWow~</span>
        </div>
        <div>
          <h6>Frontend/Backend</h6>
          <span>WelloWow~</span>
        </div>
        <div>
          <h6>Frontend/Backend</h6>
          <span>WelloWow~</span>
        </div>
      </div>
    );
  };
  const experienceHandler = () => {
    updateExperienceStatus("true");
  };
  const educationHandler = () => {
    updateEducationStatus("true");
  };
  <About />;
};
export default AboutCard;
