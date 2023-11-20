import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
const SharedLayout = () => {
  const { openMainNav, isMainMenuOpen } = useContext(AppContext);

  return (
    <div className="main-container">
      <div className="contain">
        <nav>
          <Nav />
        </nav>
        <main>
          <div
            onClick={() => openMainNav()}
            className={`${isMainMenuOpen ? "sidebar-in" : "sidebar-out"} overlay`}>
            <aside className="sidebar">
              <SideBar />
            </aside>
          </div>
          <div style={{ background: "blue" }}>
            <div className="large-screen">
              <SideBar />
            </div>
          </div>
          <div className="mainContain">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
