import hamburgerMenu from "../../assets/menu.svg";
import barSvg from "../../assets/bar.svg";
import stackSvg from "../../assets/stack.svg";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./sidebar.module.scss";
import { useState } from "react";
import useMediaQuery from "../../../utils/hook";

const Sidebar = () => {
  const [openMobileSidebar, setMobileSidebar] = useState(false);
  const matchHome = useMatch("/");
  const matchInfo = useMatch("/info");
  const isDesktop = useMediaQuery(`(min-width: 1024px)`);

  const handleSidebar = () => {
    if (!isDesktop) {
      console.log("Mobile");
      setMobileSidebar(true);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.hamburger}>
          <img src={hamburgerMenu} alt="Hamburger Menu" />
        </div>

        <div className={styles.options__container}>
          <div className={styles.options}>
            <div className={Boolean(matchHome) ? styles.active : ""}>
              <NavLink to="/">
                <img src={stackSvg} alt="" />
              </NavLink>
            </div>

            <div className={Boolean(matchInfo) ? styles.active : ""}>
              <NavLink to="/info">
                <img src={barSvg} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
