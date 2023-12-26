import React from "react";
import styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className="container">
        <h1 className="title">Контакты</h1>
        <p className={styles.text}>
          Всем привет! Это мои контакты. Пишите в любое время, отвечу при первой
          возможности. Я живу в Иркутске (+5 мск), поэтому, если нужно
          созвониться, то лучше согласовать звонок!
        </p>
        <div className={styles.grid}>
          <div className={styles.item}>
            <a href="https://t.me/vikulov38">
              <span className={styles.img}>
                <img src="/svg/telegram.svg" alt="telegram" />
              </span>
              <span>https://t.me/vikulov38</span>
            </a>
          </div>
          <div className={styles.item}>
            <span className={styles.img}>
              <img src="/svg/mail.svg" alt="mail.ru" />
            </span>
            <span>vikulovtola@mail.ru</span>
          </div>
          <div className={styles.item}>
            <span className={styles.img}>
              <img src="/svg/gmail.svg" alt="gmail.com" />
            </span>
            <span>vikulovtolya38@gmail.com</span>
          </div>
          <div className={styles.item}>
            <a href="https://github.com/Gaffee38">
              <span className={styles.img}>
                <img src="/svg/github.svg" alt="github" />
              </span>
              <span>https://github.com/Gaffee38</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
