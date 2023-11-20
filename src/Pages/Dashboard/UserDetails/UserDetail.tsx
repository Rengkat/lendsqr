import "./style.scss";
import { Outlet, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/all";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/all";
import { useGetUserDetailQuery } from "../../../Redux/Api/UserApi";
import { IndividualType } from "../../../Constants/constants";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../../Redux/Features/LoginSlice";

// type ContextType = { user: User | null };
const UserDetailLayOut = () => {
  // USERID=============
  const { userID }: any = useParams();
  const { data, isLoading } = useGetUserDetailQuery(userID);
  const dispatch = useDispatch();
  const handleBlacklist = (id: any) => {
    dispatch(updateStatus(id));
    console.log("first");
  };
  return (
    <div className="detail-container">
      <Link to="/user" className="arrow">
        <HiArrowLongLeft fontSize={30} /> <p>Back to User</p>
      </Link>
      <div className="sub">
        <h1>User Details</h1>
        <div className="btns">
          <button
            className="blk-btn"
            onClick={(e) => handleBlacklist(data?.id)}>
            BLACKLIST
          </button>
          <button className="act-btn">ACTIVE USER</button>
        </div>
      </div>
      <div className="details-heading">
        <div className="detail-profile">
          <div className="left">
            {/* <div className="image"> */}
            <img className="image" src={data?.profile.avatar} alt="image" />
            {/* <AiOutlineUser fontSize={50} /> */}
            {/* </div> */}
            <div className="name">
              <h1>
                {data?.profile.lastName} {data?.profile.firstName}
              </h1>
              <p>{data?.profile.address}</p>
            </div>
          </div>
          <div className="user-tier">
            <p>User's Tier</p>
            <p>stars</p>
          </div>
          <div className="account">
            <h1>
              {data?.profile.currency}
              {data?.accountBalance}
            </h1>
            <p>{data?.accountNumber} / Frst bank</p>
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
