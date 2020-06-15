import React from "react";
import SkillBar from "react-skillbars";

function Skillbar(SKILLS, colors) {
  SKILLS = [
    {
      type: "Java",
      level: 75,
    },
    {
      type: "React",
      level: 80,
    },
    {
      type: "Javascript",
      level: 75,
    },
    {
      type: "HTML",
      level: 45,
    },
    {
      type: "CSS",
      level: 50,
    },
    {
      type: "Bootstrap",
      level: 35,
    },
    {
      type: "MongoDB",
      level: 55,
    },
    {
      type: "Python",
      level: 45,
    },
    {
      type: "Git",
      level: 75,
    },
    {
      type: "Jira",
      level: 65,
    },
    {
      type: "Docker",
      level: 35,
    },
    {
      type: "Jest",
      level: 40,
    },
  ];
  colors = {
    bar: "#313131",
    title: {
      text: "#313131",
      background: "#ccc",
    },
  };
  return (
    <div style={{ paddingTop: "-20px !important" }}>
      <SkillBar skills={SKILLS} colors={colors} height={30}></SkillBar>
    </div>
  );
}

export default Skillbar;
