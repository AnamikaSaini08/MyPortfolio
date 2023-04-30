import React from "react";
import Degree from "./Degree";
import Certificates from "./Certificates";
import Fade from 'react-reveal/Fade';

const Education = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Fade bottom><div className="flex my-32">
        <div className="w-1/2">
          <img
            className="h-80 rounded-md shadow-lg"
            src="https://media.istockphoto.com/id/1297672426/photo/graduation-cap-and-diploma-concept-on-a-wood-background.jpg?b=1&s=170667a&w=0&k=20&c=cwOR76gUi69VdRBLD1i6EAjXVLpyqRLMEZ6vmV4gGNI="
          />
        </div>

        <div className="">
          <h1 className="text-center text-5xl text-bold text-slate-800 font-sans">
            Education
          </h1>
          <p className="my-10 text-bold text-slate-800 text-3xl text-center">
            Basic Qualification and Certifcations
          </p>
          <div className="flex mt-10 ml-28">
            <a>
              <img
                className="w-12 h-12 mx-2 rounded-md"
                src="data:image/png;base64,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"
              />
            </a>
            <a>
              <img
                className="w-12 h-12 mx-2 rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qjHQIdT-XQw4a-J2i7HaT_abw09svqDfW048K1JzvQ&s"
              />
            </a>
            <a>
              <img
                className="w-12 h-12 mx-2 rounded-md"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAYFBMVEUNFB4A6mT///8AAAAOABQA82gACRcIEBsA8GYNABfn5+gJiUAGsFAAAA3s7e7W19hkZWasra0xMTLNzs8nJypUVVYHnUkA/GsJdTofICBbXF2ys7TAwMH29vYAABHf4OE7M9RuAAAAy0lEQVR4nO3aNwrDQBBAUTnKOed4/1u6UKMFIWSQsce8107z2WoHJssAAAAAAAAAAAAA/lteUj+tGH9H3kulYfPqaf8d4w80dxPbXbn6sV8k02evaD4cB42NTq1XD7M0erkpR89XafSkeOr+bNRpbipatGjRokWLFi1atGjRooNGn5Pt+xIienFdl93uEaLriRYtWrRo0aJFi44ZHfJrGnIJiLluiRYtWrRo0aJFixYtWrToNoQ82wx5IJuFPEUGAAAAAAAAAAAA+A0vynI/4ekVQEAAAAAASUVORK5CYII="
              />
            </a>
            <a>
              <img
                className="w-12 h-12 mx-2 rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qIArM293GJgkXY5dA0M5LZwmD19BNgO0BfN3WLngtg&s"
              />
            </a>
          </div>
        </div>
      </div></Fade>
      <Degree />
      <Certificates />
      </div>
  );
};

export default Education;
