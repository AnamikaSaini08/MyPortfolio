import React, { useEffect, useState } from "react";
import anamika from '../images/anamika.jpg';
import Fade from 'react-reveal/Fade';

const About = () => {
  const myContent = "Software Engineer, Full Stack Developer, Competative Programmer, Learner.";
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

  const [buttonText, setButtonText] = useState();

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setButtonText("Github");
    }else{
      setButtonText("Follow Me On Github")
    }
  }, [window.innerWidth]);

  return (
    <div className="mt-20 flex pb-20 max-w-full"><Fade bottom>
      <div className="w-1/2">
        <div>
          <h1 className="text-slate-900 text-5xl text-bold bg-blue-dark text-blue-dark">
            Anamika Saini
          </h1>
          <h2 className="my-5 text-2xl text-slate-800 text-bold">
            (Anamika 2023)
          </h2>
          <p className="font-sans my-4 text-2xl text-bold">
            {myAbout}
          </p>
          <div>
            <div className="flex mt-11">
              <a href="https://github.com/AnamikaSaini08/" target="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3Jv37jpEDe2pdpNeV6AUA3CtIhH4qHBO_CDcFR4v2w&usqp=CAU&ec=48665701"
                  alt="github"
                  className="rounded-xl mx-2 hover:-translate-y-1 max-h-8 max-w-8"
                />
              </a>
              <a href="https://www.linkedin.com/in/anamika-saini-4347b0165/" target="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTissrnPnmxvdi7kmnn9-YeOLvQxc5JFaCc3G8YijFaJA&usqp=CAU&ec=48665701"
                  alt="linkedin"
                  className=" max-h-8 max-w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
              <a href="#" onClick={(e)=>{
                 e.preventDefault();
                window.open('mailto:abc@gmail.com')
              }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeh9CaomaYthc41Shi3-sYkiDYVv6VuO2qA66AbWcUhw&usqp=CAU&ec=48665701"
                  alt="gmail"
                  className=" max-h-8 max-w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
              <a href="https://instagram.com/ana_mika_saini?igshid=YmMyMTA2M2Y=" target="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwROQnlZmjZGTtGMMtUv0ws5dANU0CxQM8qIC5ZUZECw&usqp=CAU&ec=48665701"
                  alt="insta"
                  className=" max-h-8 max-w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
              <a href="https://www.youtube.com/channel/UC2IhLRTtPBKwCNId2HKaWpQ" target="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAb1BMVEX/AAD/////jIz/fn7/5ub/7+//3t7/9PT/6ur/e3v/TU3/GBj/JSX/Kyv/SEj/bm7/cnL/g4P/z8//+fn/ZWX/Ojr/Vlb/amr/MjL/xsb/trb/X1//h4f/mpr/kZH/sbH/v7//q6v/QED/1tb/oqJBRB1mAAACX0lEQVR4nO2a6XKiUBBGL/u+I4IIiPr+zxgdJzNJKhX7u9AJqerzm+XUBXrjKiUIgiAIgiAIgiAIgiAIv4Qo2aVh0+/3WR4E1p0gz7O6bprw3MZcd42brDCH6VS6tmeQqRz30h2u4zHod8sddlbnO8DdPzfy3blPlmhcq2UKb/BHbYtw4UJ8NEk1NVa1uKMlkqy7Gnc8nW/JXV3DMC64RsGgYRjWJpZDY0EiFg3DQD2OTB4B6HFg8phAj5LJo8M0EpvJw8ZCyHm9xPIeD0u+68f0V0LIo2fz6CEPi80Di6gD5YqjjscAeUyEK5rqfMI9sABCuYF5O673UQ8sgFDCmPnnSAs0wTIdJds+PFQ8QbHGhjwo4dR8PTjstuGhVE2vVlg9VHSkVrM+5EF5+cx3ZyTESgHyiHAPpdoLySMCPGJHw0OpjPA4HaTBTPQ8bo3oc48W8Gh1PZ5nhO/yUOPXYe27PJ49GchD+/14Xi9A76nm90IJqw5SKGvFj4jUa0DxQyOexjPFAo3rcH4pqPmFNc/1m8i3KV/9gdRjM1SPuZAHJXU+PAKwPi0hD756/QR58PUvM+RB6+d0hgJYP8fX32KDKb5+v4E8tjL/2Mo8iG0+5oIj9o3MCzczP93KPHkr83Wm/w1Ytr3D8//lCHuwLAhWBD1g+D9XIT3UP9aP7dgs+b8IpZuiU2lq3BjWM6mu2hY32uxg+97CpOc5flcs32wQpXVgjvOhvNjI8ni2W56mwSyykGsrRpS057Dp632W53/3fwR5tq/7Jkx3CdTACoIgCIIgCIIgCIIgCMJP8gJkByjpVNrrBQAAAABJRU5ErkJggg=="
                  alt="youtube"
                  className=" max-h-8 max-w-8 rounded-xl mx-2 hover:-translate-y-1 "
                />
              </a>
            </div>
          </div>
        </div>
      <button className=" hover:bg-slate-200 hover:text-gray-600 ease-in duration-200 hover:border-2 hover:border-gray-600 px-5 py-3 bg-black text-white my-12 ml-1 rounded-lg font-sans text-xl">
        {buttonText}
      </button>
      </div>
      <div className="ml-56">
          <img 
          className="w-80 shadow-lg rounded-md transform transition-transform animate-spin-slow"
          src={anamika} alt="profile" />
        </div>

        </Fade></div>
  );
};

export default About;
