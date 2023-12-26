import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
  const screenWidth = window.innerWidth;
  const [screenWidthIsMob, setScreenWidthIsMob] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };

  useEffect(() => {
    function toKnowScreenWidth() {
      if (screenWidth < 768) {
        setScreenWidthIsMob(true);
      }
    }
    toKnowScreenWidth();
  }, []);

  return (
    <div>
      {screenWidthIsMob ? (
        <header className={styles.headerMob}>
          <div className={styles.headerTop}>
            <div className="container">
              <div className={styles.headerTopInner}>
                <div className={styles.logo}>
                  <img src="/assets/Logo.svg" alt="Vikulov" />
                </div>
                <div className={styles.buttons}>
                  <div
                    className={
                      menuIsOpen
                        ? styles.burger + " " + styles.hide
                        : styles.burger + " " + styles.show
                    }
                    onClick={toggleMenu}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div
                    className={
                      menuIsOpen
                        ? styles.close + " " + styles.show
                        : styles.close + " " + styles.hide
                    }
                    onClick={toggleMenu}
                  >
                    <img src="/svg/close.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              menuIsOpen
                ? styles.burgerMenu + " " + styles.show
                : styles.burgerMenu
            }
            onClick={toggleMenu}
          >
            <div className={styles.navWrapper}>
              <nav className="nav-mob">
                <NavLink to="/">Обо мне</NavLink>
                <a href="#">Навыки</a>
                <NavLink to="/projects">Проекты</NavLink>
                <a href="#">Контакты</a>
              </nav>
            </div>
          </div>
        </header>
      ) : (
        <div className="container">
          <header className={styles.header}>
            <div className={styles.logo}>
              <img src="/assets/Logo.svg" alt="Vikulov" />
            </div>
            <nav className="nav-desc">
              <NavLink to="/">Обо мне</NavLink>
              <a href="#">Навыки</a>
              <NavLink to="/projects">Проекты</NavLink>
              <a href="#">Контакты</a>
            </nav>
          </header>
        </div>
      )}
    </div>
  );
}

export default Header;
