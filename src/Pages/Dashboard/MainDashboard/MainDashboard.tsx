import { useContext } from "react";
import UserSummary from "../../../Components/UserSummary/UserSummary";
import Barchat from "./Barchat";
import Spread from "./Spread";

const MainDashboard = () => {
  return (
    <div style={{ margin: "1rem 0rem 3rem 0" }}>
      <UserSummary />
      <div
        style={{
          width: "100%",
          padding: "2rem",
          background: "#ffffff",
          border: " 1px solid rgba(33, 63, 125, 0.06)",
          boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: "4px",
        }}>
        <Spread />
      </div>
    </div>
  );
};

export default MainDashboard;
