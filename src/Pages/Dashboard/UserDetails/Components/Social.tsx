import { IndividualType } from "../../../../Constants/constants";

interface SocialsProps {
  socials: IndividualType;
}

const Social = ({ socials }: SocialsProps) => {
  return (
    <div className="top-grid-education">
      <div className="full-name">
        <p>Twitter</p>
        <h3>{socials?.socials?.twitter}</h3>
      </div>
      <div className="phone-no">
        <p>facebook</p>
        <h3>{socials?.socials?.facebook}</h3>
      </div>
      <div className="email">
        <p>instagram</p>
        <h3>{socials?.socials?.instagram}</h3>
      </div>
    </div>
  );
};

export default Social;
