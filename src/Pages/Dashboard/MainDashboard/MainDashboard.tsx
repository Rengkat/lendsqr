import React from "react";
import UserSummary from "../../../Components/UserSummary/UserSummary";
import Barchat from "./Barchat";
import PieCharts from "./PieChart";
import SpiderChart from "./SpiderChart";
import Spread from "./Spread";
import { useGetUsersQuery } from "../../../Redux/Api/UserApi";

const MainDashboard = () => {
  const { data, isFetching } = useGetUsersQuery(undefined);
  const tenCustomer = data?.slice(0, 10);

  return (
    <div>
      <UserSummary />
      {/* <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "5rem",
        }}>
        <Barchat />
        <PieCharts />
      </div> */}
      {/* <Spread />
      <SpiderChart /> */}
    </div>
  );
};

export default MainDashboard;
