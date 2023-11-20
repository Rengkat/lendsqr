import "./style.scss";
import { IndividualType } from "../../../../Constants/constants";

interface DetailsProps {
  profile: IndividualType;
}
const DetailsComponent = ({ profile }: DetailsProps) => {
  return (
    <div className="top-grid">
      <div className="full-name">
        <p>Full Name</p>
        <h3>
          {profile?.profile?.lastName} {profile?.profile?.firstName}
        </h3>
      </div>
      <div className="phone-no">
        <p>Phone number</p>
        <h3>{profile?.profile?.phoneNumber}</h3>
      </div>
      <div className="email">
        <p>Email address</p>
        <h3>{profile?.email}</h3>
      </div>

      <div className="bvn">
        <p>bvn</p>
        <h3>{profile?.profile?.bvn}</h3>
      </div>
      <div className="gender">
        <p>gender</p>
        <h3>{profile?.profile?.gender}</h3>
      </div>
      {/* <div className="marital-status">
        <p>marital status</p>
        <h3>{profile?.}</h3>
      </div>
      <div className="children">
        <p>children</p>
        <h3>{profile.children}</h3>
      </div>
      <div className="residence">
        <p>types of residence</p>
        <h3>{profile.address}</h3>
      </div> */}
    </div>
  );
};

export default DetailsComponent;
