import React from "react";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
  return (
    <div className="my-36">
     <h1 className="text-4xl text-bold text-center text-slate-800">Certifcations</h1>

     <div className="flex flex-wrap mt-10">
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
     </div>
    </div>
  );
};

export default Certificates;