import { userInfo } from "../../Constants/constants";
import "./stylle.scss";

const UserSummary = () => {
  return (
    <div className="User-container">
      <h1>Users</h1>

      <div className="flex">
        {userInfo.map((detail) => {
          return (
            <div className="box" key={detail.heading}>
              <div
                className={`icon ${
                  detail.heading === "Users"
                    ? "users"
                    : detail.heading === "Active Users"
                    ? "activeUser"
                    : detail.heading === "Users with Loans"
                    ? "userWithLoan"
                    : "userWithSavings"
                }`}>
                {detail.icon}
              </div>
              <p>{detail.heading}</p>
              <h1>{detail.numbers}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserSummary;
