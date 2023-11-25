import { UserType } from "../../../../Constants/constants";
type GurantorProp = {
  gurantor: UserType;
};
const Gurantor = ({ gurantor }: GurantorProp) => {
  return (
    <div className="top-grid-education">
      <div className="full-name">
        <p>full name</p>
        <h3>
          {gurantor?.guarantor?.lastName} {gurantor?.guarantor?.firstName}
        </h3>
      </div>
      <div className="phone-no">
        <p>phone number</p>
        <h3>{gurantor?.guarantor?.phoneNumber.slice(0, 13)}</h3>
      </div>
      <div className="email">
        <p> address</p>
        <h3>{gurantor?.guarantor?.address}</h3>
      </div>
    </div>
  );
};

export default Gurantor;
