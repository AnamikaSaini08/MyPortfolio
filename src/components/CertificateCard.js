import React from "react";

const CertificateCard = ({title , platform , link}) => {
  return (
    <div>
      <div className="shadow-lg w-80 bg-white text-center text-bold text-xl mx-7">
        <a href={link} target="/">
          <img
            className="px-10 hover:bg-gray-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmA5noBqJFNVQG0BqXd6vuy0aQhSfJUzesJhulrFHpYQ&s"
          />
        </a>
        <div className="py-4 bg-gray-200">
          <h1>{title}</h1>
          <h1 className="text-slate-500">- {platform}</h1>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
