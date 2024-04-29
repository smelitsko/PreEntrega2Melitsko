import { useState } from "react";

import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import Brand from "../Brand/Brand";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";
import useScreenSize from "../../hooks/useScreenSize";
function Layout({ children }) {
  const screenSize = useScreenSize();
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="header__wrapper">
        <div className="brand__navbar__wrapper">
          <Brand />
          {(screenSize.width >= 800 || visible) && <NavBar />}
        </div>
        <ButtonNavBar callback={handleClick} />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
