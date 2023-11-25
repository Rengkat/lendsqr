import { useContext } from "react";
import UserSummary from "../../../Components/UserSummary/UserSummary";
import Barchat from "./Barchat";
import PieCharts from "./PieChart";
import SpiderChart from "./SpiderChart";
import Spread from "./Spread";
import { AppContext } from "../../../Context/AppContext";

const MainDashboard = () => {
  return (
    <div>
      <UserSummary />
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "5rem",
        }}>
        <Barchat />
        <PieCharts />
      </div>
      <Spread />
      <SpiderChart />
    </div>
  );
};

export default MainDashboard;
