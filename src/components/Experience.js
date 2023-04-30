import React, { useState } from "react";
import Accordian from "./Accordian";
import {Fade , Zoom} from "react-reveal";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <Fade bottom><div className="flex my-32 ">
        <div className="w-1/2">
          <img
            className="max-w-m h-80 rounded-md shadow-lg"
            src="https://media.istockphoto.com/id/1427923620/photo/business-pie-chart-bar-sign-on-dark-background-3d-render-concept-for.jpg?s=612x612&w=0&k=20&c=0Oiiz-GZmuAOvvdnHbSG2T_kkr2oWMRuW_keDlcaC0g="
          />
        </div>

        <div className="w-full ml-32 text-center items-center">
          <h1 className="text-5xl text-bold text-slate-800 font-sans">
            Experience
          </h1>
          <p className="my-10 text-bold text-slate-800 text-3xl">
            Internships Volunteership and Achievements
          </p>
          <p className="text-xl">
            I have worked with many evolving startups as an Full Stack
            Developer.
          </p>
        </div>
      </div></Fade>
      <div>
        <button
          className="p-4 w-full bg-pink-100 text-left text-xl"
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
        {isVisible==="Intern" && <Fade><Zoom><div className="py-2 shadow-lg">
          <Accordian
            role="Software Developer Internship - Full Stack"
            company="Hexadecimal Software Pvt Ltd."
            desc="• Worked as a bug solver on a React-based project, tracking and
            resolving issues through Jira tickets. As well as Designed and developed new page components, ensuring that the
            design and user experience align with the overall project goals and
            client expectations."
            time="Jan 2023- March 2023"
            location="Noida, India"
          />
          <Accordian
            role="ReactJs Developer"
            company="Code Quotient Pvt. Ltd."
            desc="• Built high-quality React pages forthe company’s projects, applying best
            practices in front-end development.Proactively identified and solved issues in the React-based project by
            effectively using Jira tickets and working closely with the development team."
            time="Oct 2022- Dec 2022"
            location=" Mohali, India"
          />
        </div></Zoom></Fade>}
        <hr />
        <button className="p-4 w-full bg-pink-100 text-left text-xl"
        onClick={()=>{
          if(isVisible === "Achievements"){
            setIsVisible("dummy");
          }else
          setIsVisible("Achievements");
         }}>
          Achievements
          <p className="float-right">+</p>
        </button>
        {isVisible === "Achievements" && <Fade><Zoom><div className="py-2 shadow-lg">
        <Accordian
            role="PhonePe Tech. Externship"
            company="PhonePe"
            desc="•Selected for PhonePe Tech Scholar Pro- gram among thousands of applicants.
            Learned the importance of Various Data Structures and Algorithms related to them and
            Improved Development Skills for real world Project."
            time="Nov 2022 – April 2023 "
            location="Remote"
          />
          <Accordian
            role="Pride Certificate"
            company="United Institute Of Technology | CodeChef"
            desc="•Received Pride Certificate from College for overall achievements in Academics.
            Secured Globalrank 761 among 5000+ participants in codechef April long
            challenge 2021."
          />
        </div></Zoom></Fade>}
      </div>
    </div>
  );
};

export default Experience;
