import React from "react";
import ProjectCard from "./ProjectCard";
import { Fade,Zoom } from "react-reveal";

const Projects = () => {
  return (
    <div>
      <Fade bottom><div className="flex my-32">
          <img
            className="rounded-md shadow-lg max-w-md"
            src="https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM="
          />

        <div className='text-center ml-10'>
          <h1 className="text-5xl text-bold text-slate-800 font-sans">
             Projects
          </h1>
          <p className="my-10 text-lg text-slate-900">
          My projects makes use of vast variety of latest technology tools. My
          best experience is to create Android Apps using Kotlin and following
          Modern Android Development practices which includes Android Jetpack
          and Android Architecture Components. I have also built some backend
          applications using Ktor and Spring Boot.
          </p>
        </div>
      </div></Fade>

      <div className="flex flex-wrap justify-around">
        <ProjectCard 
         title="Youtube_Clone"
          desc="This is a YouTube clone built using React, Redux, Node.js, and the YouTube Data API. "
          date="2023-04-5"
          runlink="https://amazing-pegasus-5972b9.netlify.app/"
          gitlink ="https://github.com/AnamikaSaini08/Youtube_Clone"
        />
         <ProjectCard 
          title="Movie Discovery"
          desc="This app will display movies in a grid and give the user more information when they click on one of the posters."
          date="2022-12-17"
          runlink="https://creative-caramel-54df4c.netlify.app/"
          gitlink ="https://github.com/AnamikaSaini08/Movie-Discovery-App"
        />
         <ProjectCard 
          title="Least Time Travel Path"
          desc="This project is used for finding the shortest distance between two cities.
          Available Bus and Aeroplane..."
          date="2022-08-11"
          runlink="https://least-time-travel-path.netlify.app/"
          gitlink ="https://github.com/AnamikaSaini08/Least-Time-Travel-Path"
        />
         <ProjectCard 
          title="SharkTank Backened API"
          desc="SharkTank is a panel of potential investors,
          who listen to entrepreneurs pitch ideas for a business they wish to develop."
          date="2022-11-23"
          runlink="https://www.youtube.com/watch?v=ymcXTjMdOnc&t=301s"
          gitlink ="https://github.com/AnamikaSaini08/InvestInStartup"
        />
         <ProjectCard 
          title="Online Compiler"
          desc="This is an online compiler that can compile and run C\C++\Java\Python And 
          JavaScipt Program which is implemented using an API."
          date="2022-07-18"
          runlink="https://github.com/AnamikaSaini08/Online-Compiler"
          gitlink ="https://github.com/AnamikaSaini08/Online-Compiler"
        />
         <ProjectCard 
          title="Registration Login Form"
          desc="This project is simple login registration form using HTML, CSS, JS, MongoDB, NodeJS, ExpressJS."
          date="2022-08-01" 
          runlink="http://registration-login-form-page.vercel.app/"
          gitlink ="https://github.com/AnamikaSaini08/Least-Time-Travel-Path"
        />
        <ProjectCard 
          title="Snake Game"
          desc="Fruit Snake is a snake game where a snake grows longer as it 
          eats fruits like apples, oranges, etc. This game is implemented using javascript."
          date="2022-02-06"
          runlink="https://snake-awake.netlify.app/"
          gitlink ="https://github.com/AnamikaSaini08/Snake-Game-OOPS-"
        />
      </div>
    </div>
  );
};

export default Projects;
