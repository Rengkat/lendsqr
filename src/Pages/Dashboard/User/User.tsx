import UserSummary from "../../../Components/UserSummary/UserSummary";
import UserTable from "../../../Components/UserTable/UserTable";
import "./style.scss";
import { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

const User = () => {
  const { users } = useContext(AppContext);

  return (
    <>
      <div className="user-container">
        <UserSummary />
        <UserTable modifiedData={users} />
      </div>
    </>
  );
};

export default User;
