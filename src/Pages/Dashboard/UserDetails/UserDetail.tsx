import "./style.scss";
import { Outlet, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/all";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/all";
import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { UserProfile } from "../../../Constants/constants";
const UserDetailLayOut = () => {
  const { userID }: any = useParams();
  const [data, setData] = useState<UserProfile | undefined>(undefined);

  // Modify the user with status since it was not there
  const handleActivateUser = async () => {
    try {
      const res = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "active" }),
        }
      );

      if (res.ok) {
        console.log("User activated successfully");
        // Update state or perform other actions
      } else {
        console.error("Failed to activate user. Status:", res.statusText);
      }
    } catch (error) {
      console.error("Error activating user:", error);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      const resDta = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userID}`
      );
      const res = await resDta.json();
      const user = { ...res, status: "active" };
      setData(user);
    };
    getUser();
  }, []);

  return (
    <div className="detail-container">
      <Link to="/user" className="arrow">
        <HiArrowLongLeft fontSize={30} /> <p>Back to User</p>
      </Link>
      <div className="sub">
        <h1>User Details</h1>
        <div className="btns">
          <button className="blk-btn" onClick={handleActivateUser}>
            BLACKLIST
          </button>
          <button className="act-btn">ACTIVE USER</button>
        </div>
      </div>
      <div className="details-heading">
        <div className="detail-profile">
          <div className="left">
            {data?.profile?.avatar ? (
              <div className="image">
                <AiOutlineUser className="icon" />
              </div>
            ) : (
              <div className="image">
                <AiOutlineUser className="icon" />
              </div>
            )}

            <div className="name">
              <h1>
                {data?.profile?.lastName} {data?.profile?.firstName}
              </h1>
              <p>{data?.accountNumber}</p>
            </div>
          </div>
          <div className="user-tier">
            <p>User's Tier</p>
            <div className="star">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
          </div>
          <div className="account">
            <h3>
              {data?.profile?.currency}
              {data?.accountBalance}
            </h3>
            <p>
              {data?.accountNumber}/{data?.profile.address}
            </p>
          </div>
        </div>
        <div className="links">
          <NavLink className="link" to="generalDetails">
            General Details
          </NavLink>

          <NavLink className="link" to="document">
            Documents
          </NavLink>

          <NavLink className="link" to="bankDetails">
            Bank Details
          </NavLink>

          <NavLink className="link" to="loan">
            Loans
          </NavLink>

          <NavLink className="link" to="saving">
            Savings
          </NavLink>
          <NavLink className="link" to="appAndSystem">
            App and System
          </NavLink>
        </div>
      </div>
      <div className="main-detail">
        <div className="container">
          <Outlet context={{ data }} />
        </div>
      </div>
    </div>
  );
};

export default UserDetailLayOut;
