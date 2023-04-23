import React, { useEffect, useState } from "react";
import ana from '../images/ana.jpg';

const About = () => {
  const myContent = "An aspiring Web Developer and Competitive Programmer.";
  const [myAbout , setMyAbout] = useState([]);
  let currIndex = 0;

  useEffect( ()=>{
    const interval = setInterval( ()=>{
      if(currIndex < myContent.length){
        setMyAbout(myContent.slice(0,currIndex)+"|");
        currIndex += 1;
      }else{
        setMyAbout(myContent.slice(0,currIndex)+"|");
        setTimeout(() => {
          currIndex = 0;
        }, 500);
      }
    } , 100);

    return ()=>{
      clearInterval(interval);
    }
  },[currIndex]);

  return (
    <div className="mt-24 flex pb-20">
      <div className="w-1/2">
        <div>
          <h1 className="text-slate-900 text-5xl text-bold bg-blue-dark text-blue-dark">
            Anamika Saini
          </h1>
          <h2 className="my-5 text-2xl text-slate-800 text-bold">
            (Anamika 2023)
          </h2>
          <p className="font-sans my-4 text-2xl text-gray-600 text-bold">
            {myAbout}
          </p>
          <div>
            <div className="flex mt-11">
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3Jv37jpEDe2pdpNeV6AUA3CtIhH4qHBO_CDcFR4v2w&usqp=CAU&ec=48665701"
                  alt="github"
                  className="h-8 w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTissrnPnmxvdi7kmnn9-YeOLvQxc5JFaCc3G8YijFaJA&usqp=CAU&ec=48665701"
                  alt="github"
                  className="h-8 w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeh9CaomaYthc41Shi3-sYkiDYVv6VuO2qA66AbWcUhw&usqp=CAU&ec=48665701"
                  alt="github"
                  className="h-8 w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwROQnlZmjZGTtGMMtUv0ws5dANU0CxQM8qIC5ZUZECw&usqp=CAU&ec=48665701"
                  alt="github"
                  className="h-8 w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
              <a href="#">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAb1BMVEX/AAD/////jIz/fn7/5ub/7+//3t7/9PT/6ur/e3v/TU3/GBj/JSX/Kyv/SEj/bm7/cnL/g4P/z8//+fn/ZWX/Ojr/Vlb/amr/MjL/xsb/trb/X1//h4f/mpr/kZH/sbH/v7//q6v/QED/1tb/oqJBRB1mAAACX0lEQVR4nO2a6XKiUBBGL/u+I4IIiPr+zxgdJzNJKhX7u9AJqerzm+XUBXrjKiUIgiAIgiAIgiAIgiAIv4Qo2aVh0+/3WR4E1p0gz7O6bprw3MZcd42brDCH6VS6tmeQqRz30h2u4zHod8sddlbnO8DdPzfy3blPlmhcq2UKb/BHbYtw4UJ8NEk1NVa1uKMlkqy7Gnc8nW/JXV3DMC64RsGgYRjWJpZDY0EiFg3DQD2OTB4B6HFg8phAj5LJo8M0EpvJw8ZCyHm9xPIeD0u+68f0V0LIo2fz6CEPi80Di6gD5YqjjscAeUyEK5rqfMI9sABCuYF5O673UQ8sgFDCmPnnSAs0wTIdJds+PFQ8QbHGhjwo4dR8PTjstuGhVE2vVlg9VHSkVrM+5EF5+cx3ZyTESgHyiHAPpdoLySMCPGJHw0OpjPA4HaTBTPQ8bo3oc48W8Gh1PZ5nhO/yUOPXYe27PJ49GchD+/14Xi9A76nm90IJqw5SKGvFj4jUa0DxQyOexjPFAo3rcH4pqPmFNc/1m8i3KV/9gdRjM1SPuZAHJXU+PAKwPi0hD756/QR58PUvM+RB6+d0hgJYP8fX32KDKb5+v4E8tjL/2Mo8iG0+5oIj9o3MCzczP93KPHkr83Wm/w1Ytr3D8//lCHuwLAhWBD1g+D9XIT3UP9aP7dgs+b8IpZuiU2lq3BjWM6mu2hY32uxg+97CpOc5flcs32wQpXVgjvOhvNjI8ni2W56mwSyykGsrRpS057Dp632W53/3fwR5tq/7Jkx3CdTACoIgCIIgCIIgCIIgCMJP8gJkByjpVNrrBQAAAABJRU5ErkJggg=="
                  alt="github"
                  className="h-8 w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
            </div>
          </div>
        </div>
      <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 px-5 py-3 bg-black text-white text-xl my-12 ml-1 rounded-lg font-sans">
        Follow Me On Github
      </button>
      </div>
      <div className="ml-56">
          <img 
          className="h-max w-80 shadow-lg rounded-md"
          src={ana} alt="profile" />
        </div>

    </div>
  );
};

export default About;
