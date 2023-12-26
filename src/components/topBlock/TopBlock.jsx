import React from "react";
import styles from "./TopBlock.module.scss";

function TopBlock() {
  return (
    <div className={styles.topBlock}>
      <div className={styles.content}>
        <div className={styles.suptitle}>FRONTEND-РАЗРАБОТЧИК</div>
        <div className={styles.name}>Викулов Анатолий</div>
        <p>Web-разработчик, всегда готовый к покорению вершин.</p>
        <div className="btn-a" title="Написать в телеграм">
          <a href="https://t.me/vikulov38">
            <span>Написать мне</span>
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/assets/topBlock-img.png" alt="" />
      </div>
    </div>
  );
}

export default TopBlock;
