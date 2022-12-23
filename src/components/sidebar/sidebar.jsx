import hamburgerMenu from "../../assets/menu.svg";
import barSvg from "../../assets/bar.svg";
import stackSvg from "../../assets/stack.svg";
import { NavLink, useMatch, useParams } from "react-router-dom";
import styles from "./sidebar.module.scss";
import { useSelector } from "react-redux";
import HamburgerComponent from "./hamburger";

const Sidebar = () => {
  const { coinId } = useParams();

  //checking url params to be able to indicate page user is on
  const matchHome = useMatch("/");
  const matchInfo = useMatch(`/info/${coinId}`);

  const sidebarState = useSelector((state) => state.sidebar.value);

  return (
    <div className={sidebarState ? styles.mobile_sidebar : styles.sidebar}>
      <div>
        <HamburgerComponent styles={styles} />

        <div className={styles.options__container}>
          <div className={styles.options}>
            <div className={Boolean(matchHome) ? styles.active : ""}>
              <NavLink to="/">
                <img src={stackSvg} alt="" />
              </NavLink>
            </div>

            <div className={Boolean(matchInfo) ? styles.active : ""}>
              <NavLink to="/info/ethereum">
                <img src={barSvg} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {sidebarState && <div className={styles.empty}></div>}
    </div>
  );
};

export default Sidebar;
