import React from "react";
import styles from "./SkillsBlock.module.scss";
import ProgressBar from "../UI/progressbar/Progressbar";

function SkillsBlock() {
  const data = [
    {
      id: 1,
      imgName: "html",
      name: "html",
      bar: { bgcolor: "#E44F26", completed: 100 },
    },
    {
      id: 2,
      imgName: "css",
      name: "css",
      bar: { bgcolor: "#1572B6", completed: 100 },
    },
    {
      id: 3,
      imgName: "js",
      name: "js",
      bar: { bgcolor: "#F5DE19", completed: 70 },
    },
    {
      id: 4,
      imgName: "react",
      name: "react",
      bar: { bgcolor: "#59C3E2", completed: 60 },
    },
    {
      id: 5,
      imgName: "git",
      name: "git",
      bar: { bgcolor: "#F34F29", completed: 80 },
    },
  ];
  return (
    <div className={styles.skillsBlock} id="skills">
      <div className={styles.titleWrapper}>
        <h2 className="title">Мои навыки</h2>
      </div>
      <div className={styles.flex}>
        {data.map((item) => {
          return (
            <div className={styles.item} key={item.id}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.image}>
                <img src={`/svg/${item.imgName}.svg`} alt="" />
              </div>
              <div className={styles.bar}>
                <ProgressBar
                  bgcolor={item.bar.bgcolor}
                  completed={item.bar.completed}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsBlock;
