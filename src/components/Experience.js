import React, { useState } from "react";
import Accordian from "./Accordian";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="flex my-32">
        <div className="w-1/2">
          <img
            className="max-w-m h-80 rounded-md shadow-lg"
            src="https://media.istockphoto.com/id/1427923620/photo/business-pie-chart-bar-sign-on-dark-background-3d-render-concept-for.jpg?s=612x612&w=0&k=20&c=0Oiiz-GZmuAOvvdnHbSG2T_kkr2oWMRuW_keDlcaC0g="
          />
        </div>

        <div className="w-full text-center">
          <h1 className="text-5xl text-bold text-slate-800 font-sans">
            Experience
          </h1>
          <p className="my-10 text-bold text-slate-800 text-3xl">
            Work, Internship and Volunteership
          </p>
          <p className="text-xl text-gray-500 text-bold">
            I have worked with many evolving startups as an Full Stack
            Developer.
          </p>
        </div>
      </div>
      <div>
        <button
          className="p-4 w-full bg-white text-left text-xl"
          onClick={() => {
            if(isVisible === "Intern"){
            setIsVisible("dummy");
          }else
            setIsVisible("Intern");
          }}
        >
          Internships
          <p className="float-right">+</p>
        </button>
        {isVisible==="Intern" && <div className="bg-white py-2">
          <Accordian
            role="Software Developer Internship - Full Stack"
            company="Hexadecimal Software Pvt Ltd."
            desc="• Worked as a bug solver on a React-based project, tracking and
            resolving issues through Jira tickets. As well as Designed and developed new page components, ensuring that the
            design and user experience align with the overall project goals and
            client expectations."
            time="April 2022 - Present"
            location="Noida, Currently Remote"
          />
          <Accordian
            role="Software Developer Internship - Full Stack"
            company="Hexadecimal Software Pvt Ltd."
            desc="• Worked as a bug solver on a React-based project, tracking and
            resolving issues through Jira tickets. As well as Designed and developed new page components, ensuring that the
            design and user experience align with the overall project goals and
            client expectations."
            time="April 2022 - Present"
            location="Noida, Currently Remote"
          />
        </div>}
        <hr />

        <button className="p-4 w-full bg-white text-left text-xl"
        onClick={()=>{
          if(isVisible === "Volunteer"){
            setIsVisible("dummy");
          }else
          setIsVisible("Volunteer");
         }}>
          Volunteerships
          <p className="float-right">+</p>
        </button>
        {isVisible === "Volunteer" && <div className="bg-white py-2">
        <Accordian
            role="Software Developer Internship - Full Stack"
            company="Hexadecimal Software Pvt Ltd."
            desc="• Worked as a bug solver on a React-based project, tracking and
            resolving issues through Jira tickets. As well as Designed and developed new page components, ensuring that the
            design and user experience align with the overall project goals and
            client expectations."
            time="April 2022 - Present"
            location="Noida, Currently Remote"
          />
        </div>}
        <hr />
        <button className="p-4 w-full bg-white text-left text-xl"
        onClick={()=>{
          if(isVisible === "Achievements"){
            setIsVisible("dummy");
          }else
          setIsVisible("Achievements");
         }}>
          Achievements
          <p className="float-right">+</p>
        </button>
        {isVisible === "Achievements" && <div className="bg-white py-2">
        <Accordian
            role="Software Developer Internship - Full Stack"
            company="Hexadecimal Software Pvt Ltd."
            desc="• Worked as a bug solver on a React-based project, tracking and
            resolving issues through Jira tickets. As well as Designed and developed new page components, ensuring that the
            design and user experience align with the overall project goals and
            client expectations."
            time="April 2022 - Present"
            location="Noida, Currently Remote"
          />
        </div>}
      </div>
    </div>
  );
};

export default Experience;
