import React from "react";
import Fade from 'react-reveal/Fade';

const MyWork = () => {
  return (
    <div>
      <h1 className="text-5xl text-bold text-center text-slate-900 my-20 ">
        {" "}
        What I Do?
      </h1>
      <div className="flex">
      <Fade left><img
          className="w-1/2 mt-36 shadow-md rounded-md"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjLsYYEMRcJA1Mh9vCCoej4goNZZcb2Z-MFTSFD74gQrcT2jTY"
          alt="photo"
        /></Fade>
        <div className="ml-52"><Fade right>
          <h1 className="text-4xl text-slate-900 ">Web Development</h1>
          <div className="flex mt-8 mb-16 sm:ml-28">
            <img
              className="max-h-16 max-w-16 mr-3 rounded-xl"
              src="data:image/png;base64,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"
            />
            <img
              className="max-h-16 max-w-8 mx-3 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMOTO7_9zw64R5063uqA0WPYPLkbLlA5mqV7mWwJcTw&usqp=CAU&ec=48665701"
            />
            <img
              className="max-h-16 max-w-8 mx-3 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhlEC39ClkCm9GwGFgFlcgHkX-2X7X98u3tilgEbT2Q&usqp=CAU&ec=48665701"
            />
            <img
              className="max-h-16 max-w-8 mx-3 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66S8R5hDm_tPpl8bt0vDe-tEWRlPTX8gTTxJYVO3Wpg&usqp=CAU&ec=48665701"
            />
          </div>
          <p className="text-lg text-gray-800 my-4 font-sans">
            Implementing front-end frameworks and libraries such as React or
            Angular to streamline development and enhance the performance and
            usability of web applications.
          </p>
          <p className="text-lg text-gray-800 font-sans my-4">
            Creating and managing databases, server-side logic, and APIs using
            technologies in Node.js to handle data processing and server-side
            interactions.
          </p>
          <p className="text-lg text-gray-800 font-sans my-4">
            Conducting testing and debugging to identify and fix issues,
            ensuring the stability and functionality of web applications across
            different browsers, devices, and operating systems.
          </p>
          </Fade></div>
      </div>
      <div className="flex mt-20">
        <Fade left><img
          className="w-1/2 h-full mt-36 shadow-md rounded-md"
          src="data:image/png;base64,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"
          alt="photo"
        /></Fade>
       <div className="ml-52"> <Fade right>
          <h1 className="text-4xl text-slate-900 ">Competative Programming</h1>
          <div className="flex mt-8 mb-16 ml-28">
            <img
              className="h-16 w-16 mr-3 rounded-xl"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAn1BMVEX///9ca8AoNZM5SatRYr2vtNsmO6enrNNZaL9UZL4jMZJWZr43R6pMXbxOX7x7hsrGyucAF4oYKY/t7vf39/vZ3O+4veGZodXh5PNFWLplc8MAEImAi8zR1OvKzuhxfcc3QpgJII1iaKxYYKZ7gbaytdOIks8dNKUxQKC8wNxpb61LVKCqrc6an8kAB4fKzeFwd7GPlsxBT6pCTJ2HjL0escRXAAAGN0lEQVR4nO2b23qyOhCGG8QaEgFJQHGLqLVuS9Xe/7Ut0PavyCQQQHuw/A769IDNy2Qy8yXgy8tTTz31VJ1yOzZCo4n7dwSTwKIIUcse/xGAP7IwOotaS/4HAPzQ/wY4Q/R7j4Zwm5iilAzcfGhKdAILZWQFnYcBeIGFswQIYdP2HwLgj/ogwBmiv7w/BO/dJkFaFN87L5tIlwEk0lH3jgCdAZCFWVmDyZ0ARFkIpIRle3cA4AcqTYK0KD3UnRJuS1cASGTQZq0EXSM3C7OycH15OR6UAIiF9aCeFuqP9IJZCEAYNZQq3jMVkyAtw+xV615uyxIBYEx1s9839ctfKoyUYbXKQ7gdZAjur+uDUa879jl3Xc79cbc3GhiiATMGZVuoZwsaokGDlpeZ9txrBdSAzyhXqvgSbojYRE1hivktZMJn9ZWtHe/BSRBbgpz6P7FhCGoptVC3K0gCPSjQgCYBXEYM1C2clxPIliUPohe7htsVVPOi1s4TRBJZo8KR5CP4IeJxzM9LfhBUAmwoVfwuPDfilDjkRNIdCCoBRYrTykOComYE8hMPAgJjoNz+ueBp9NeD9DRTQGCXqLGuDcwMo9Fuv8seZw1nUSmChOE2DvTYbjca72vJSU1wRtNByT7jDtL5YDbOem2pImBU2gZydDUv9Ea7LIJRwQ17/4bC+AEogWBVcoDdS3bh/i+BMgIdVSF4eRnR3yQoiaBXXA9wA1lXESiBoOcNg5s3W3rtNIAqAg4kd+Cdnh3EsnsdYaj4oXFLoIhgiv1BZ0lNA59lmHQJt+Hm8TVDoIaAbSEASpt7aqIsxLjxngVQRBAFgS+zzhbf7vx5ARABVQSM4MM8uAkag6si5h7aryCAGoIBL449ga2KTdE/b91tCEKgiEBBt+4JOvp55C5xmDTeRfdXQ8Cgv+EDySoXJ9bGFyWBOoIOHroUGKvvsVu+iJNAHQFskZ2cHa/+qzwEagigX0TSzQarkS2GFRAw1CM7kly89gT1INAecMRSvOGBj5mGVBUBapJcTGAWu78SggnsVQnH4dYT1IPQBwpTD56RBZNAHQGYEDY0HwongfpAAAgBgHBUur8Sgp41TG4WwVK8f+0I+kpTjUG9A4GPRNO01f0Q8tLxAqCpQ9Q2KS3th0AVoqbSpK+uABIGhZSopUDTYxpALRA1tCl8zNxfCaJ6sz5q2RAoQSgggJblNgkyEHVaFqRDxm0dygg0jQTgCqosAnjohskI2CbXQFc38f5UMhJkmhSTCEshqi9loqEYYRh9X6gtgahjQTcUxIEMf7OnJYaoY1kbTcF8YNPo6iB+aAiWNLUs7v1NmAkECTc34+bbcCBq2uJYa04KgjgE2NYdI2iG1rbRs94wh5Gz4n82gn3lDs2OhhoCncu2u9aL+fZ02s4Xa/HOoNuqtt1laeFOcvj5FnmbfjtWYdPv3A7CqlufSUFflUOgl37EZtUQZpf521ZH+PUETt5QSLVzvi+zUkW49gSswncQ46satlJB0FOmhGjlX4mQVPFYFUUwVrd1b1r2xVCmqa5yEToWaAyZrDpICOZAK2nkvB7jJmwMSzGABEkgpC8JX/YOdFbSBNVflcLtNK40e/mJM4E1JERxXoyJwFSEuYVmz2B4wpTqw47BBIzlxCAR/xrCEM6s+McDM3hA2cei2DX8jQM+Agt3xT6h2IXgQxBnU/yVZ3TKuqJE4VY2n74B1lswn0h4inJPvtaOwA8ynOdArOewuWVE+Qsrd+8Iokn2wnB6e00whsN9merGF/BoEMZO+yj7aVW0PzF4HpCwYBZmNd7CEPE1w+lssYt8fpYf7RazaSg8eKuWBGm9EeEqlrBw+PExDC9/magSxSPzVgEg0Y7lLKXlYkzWFguKf8GToxAAKZ0EaXnA2qmISDir71vk9Qmea1I5p/w6pqK3qWJKhKuqWZiR+6UppATTvu7xgw1/IdpXuBUZft7rNwrevEhKEGd+jy/if7Te5kI4BbppJbktkSX8ToJVhU+Oi4p/fQghCruiyhACV0WGm8f9eCoC8jLOwioNUVnu2+pmNJj29uhf87n7a6Nd0hVVhlj8GGVW3hVVVdxCY6vCQgVvXr+iz+n086FZ+NRTT/0f9B+RLYnxuvg4FwAAAABJRU5ErkJggg=="
            />
            <img
              className="h-16 w-16 mx-3 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2A2tQ8W8OuTrirbMKtM_e4UXTeoqDtzUJ8pNUnnHAg&s"
            />
            <img
              className="h-16 w-16 mx-3 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66S8R5hDm_tPpl8bt0vDe-tEWRlPTX8gTTxJYVO3Wpg&usqp=CAU&ec=48665701"
            />
          </div>
          <p className="text-lg text-gray-800 my-4 font-sans">
            Strong problem-solving skills demonstrated through participation in
            competitive programming contests, where I analyzed complex problems
            and developed efficient algorithms and data structures to achieve
            optimal solutions.
          </p>
          <p className="text-lg text-gray-800 font-sans my-4">
            Secured Global Rank 721 in national-level competitive programming
            contests at codechef, showcasing my ability to compete at a high
            level and consistently deliver competitive solutions.
          </p>
          <p className="text-lg text-gray-800 font-sans my-4">
            Proficient in programming languages such as C,C++,Java and
            Javascript.
          </p>
          </Fade></div>
      </div>
    </div>
  );
};

export default MyWork;
