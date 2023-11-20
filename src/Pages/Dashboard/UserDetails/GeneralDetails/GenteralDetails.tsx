import "./style.scss";
import { useEffect, useState } from "react";
import DetailsComponent from "../Components/DetailsComponent";
import EducationDetail from "../Components/EducationDetail";
import Social from "../Components/Social";
import Gurantor from "../Components/Gurantor";
import { useOutletContext } from "react-router-dom";
import { IndividualType } from "../../../../Constants/constants";
interface dataType {
  data: IndividualType;
}
const GenteralDetails = () => {
  const { data }: dataType = useOutletContext();

  return (
    <div>
      <div className="personal-information">
        <h2 className="heading">Personal Information</h2>
        <DetailsComponent profile={data} />
        <h2 className="heading">Education and Employment</h2>
        <EducationDetail education={data} />
        <h2 className="heading">Socials</h2>
        <Social socials={data} />
        <h2 className="heading">Guarantor</h2>
        <Gurantor gurantor={data} />
      </div>
    </div>
  );
};

export default GenteralDetails;
