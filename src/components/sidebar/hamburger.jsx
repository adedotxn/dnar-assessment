import hamburgerMenu from "../../assets/menu.svg";
import useMediaQuery from "../../../utils/hook";
import { useDispatch } from "react-redux";
import { sidebarMutate } from "../../../utils/features/sidebarSlice";
import PropTypes from "prop-types";

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

HamburgerComponent.propTypes = {
  styles: PropTypes.object,
};

export default HamburgerComponent;
