import "./NavStyle.scss";
import brandName from "../../assets/lendsqr.png";
import logo from "../../assets/Union.png";
import { MdArrowDropDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { removeUserFromLocalStorage } from "../../Context/LocalStorage";

function Nav() {
  // const { openSideBar } = useSelector((state: any) => state.login);
  const [isdrop, setIsDrop] = useState(false);
  const navigate = useNavigate();
  const { openMainNav } = useContext(AppContext);
  const handleClick = () => {
    removeUserFromLocalStorage();
    navigate("/login");
  };
  return (
    <nav>
      <div className="nav-container">
        {/* ==logo== or Menu*/}
        <div onClick={() => openMainNav()} className="menu-container">
          <ImMenu />
        </div>
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <img className="brand-name" src={brandName} alt="Brand name" />
        </div>
        {/* ==search field== */}
        <div className="search-input">
          <input type="text" placeholder="Search for anything" />
          <div className="icon">
            <BsSearch />
          </div>
        </div>
        {/* ==profile details== */}
        <div className="profile">
          <div className="notification-icon">
            <IoMdNotificationsOutline />
          </div>
          <div className="profile-detail" onClick={(e) => setIsDrop((pre) => !pre)}>
            <FaUserCircle style={{ fontSize: "1.5rem" }} />
            <p>Alexander</p>
            <MdArrowDropDown className="drp-icon" />
          </div>
          {isdrop && (
            <div className="dropdown">
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
