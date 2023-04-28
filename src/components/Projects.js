import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className="flex my-32">
          <img
            className="rounded-md shadow-lg max-w-md"
            src="https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM="
          />

        <div className='text-center ml-10'>
          <h1 className="text-5xl text-bold text-slate-800 font-sans">
             Projects
          </h1>
          <p className="my-10 text-bold text-gray-500 text-lg">
          My projects makes use of vast variety of latest technology tools. My
          best experience is to create Android Apps using Kotlin and following
          Modern Android Development practices which includes Android Jetpack
          and Android Architecture Components. I have also built some backend
          applications using Ktor and Spring Boot.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2021-06-10"
          runlink="https://least-time-travel-path.netlify.app/"
          gitlink ="https://github.com/AnamikaSaini08/Least-Time-Travel-Path"
        />
         <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2021-06-10"
        />
         <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2021-06-10"
        />
         <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2021-06-10"
        />
         <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2021-06-10"
        />
         <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2021-06-10"
        />
         <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2021-06-10"
        />
      </div>
    </div>
  );
};

export default Projects;
