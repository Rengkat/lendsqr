import { IndividualType } from "../../../../Constants/constants";

interface EducationProp {
  education: IndividualType;
}
const EducationDetail = ({ education }: EducationProp) => {
  return (
    <div className="top-grid-education">
      <div className="full-name">
        <p>education level</p>
        <h3>{education?.education?.level}</h3>
      </div>
      <div className="phone-no">
        <p>employment status</p>
        <h3>{education?.education?.employmentStatus}</h3>
      </div>
      <div className="email">
        <p>Sector of Employment</p>
        <h3>{education?.education?.sector}</h3>
      </div>
      <div className="bvn">
        <p>Duration of employment</p>
        <h3>{education?.education?.duration}</h3>
      </div>
      <div className="gender">
        <p>official email</p>
        <h3>{education?.education?.officeEmail}</h3>
      </div>
      <div className="marital-status">
        <p>monthly income</p>
        <h3>{education?.education.monthlyIncome[0]}</h3>
      </div>
      <div className="children">
        <p>loan payment</p>
        <h3>{education?.education?.loanRepayment}</h3>
      </div>
    </div>
  );
};

export default EducationDetail;
