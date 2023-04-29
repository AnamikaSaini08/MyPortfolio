import React from "react";
import CertificateCard from "./CertificateCard";
import Zoom from 'react-reveal/Zoom';

const Certificates = () => {
  return (
    <div className="my-36">
     <h1 className="text-4xl text-bold text-center text-slate-800">Certifications</h1>

     <Zoom><div className="flex mt-10 flex-wrap ml-40 sm:ml-0 ">
     <CertificateCard
        title="Problem Solving Basic"
        platform="Hackerrank"
        link="https://www.hackerrank.com/certificates/e5ef891a09b2"
      />
      <CertificateCard
        title="Problem Solving Intermediate"
        platform="Hackerrank"
        link="https://www.hackerrank.com/certificates/17de291749ff"
      />
      <CertificateCard
        title="Badges"
        platform="Hackerrank"
        link="https://www.hackerrank.com/anamika08saini08"
      />
     </div></Zoom>
    </div>
  );
};

export default Certificates;
