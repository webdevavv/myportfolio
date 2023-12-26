import React from "react";
import TopBlock from "../components/topBlock/TopBlock";
import SkillsBlock from "../components/skillsBlock/SkillsBlock";

function Home() {
  return (
    <div>
      <div className="container">
        <TopBlock />
        <SkillsBlock />
      </div>
    </div>
  );
}

export default Home;
