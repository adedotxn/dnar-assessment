import hamburgerMenu from "../../assets/menu.svg";
import useMediaQuery from "../../../utils/hook";
import { useDispatch } from "react-redux";
import { sidebarMutate } from "../../../utils/features/sidebarSlice";

const HamburgerComponent = ({ styles }) => {
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery(`(min-width: 1024px)`);

  const toggleSidebar = () => {
    if (isDesktop) return;
    dispatch(sidebarMutate());
  };

  return (
    <div
      onClick={toggleSidebar}
      className={[styles.hamburger, styles.mobile].join(" ")}
    >
      <img src={hamburgerMenu} alt="Hamburger Menu" />
    </div>
  );
};

export default HamburgerComponent;
