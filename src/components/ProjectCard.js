import React from 'react'

const ProjectCard = ({title,desc,date,runlink,gitlink}) => {
  return (
    <>
      <div className="shadow-lg bg-white max-h-full max-w-full p-7 m-2 sm:w-1/3">
          <div className="flex mb-3">
           <a href={gitlink} target="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3Jv37jpEDe2pdpNeV6AUA3CtIhH4qHBO_CDcFR4v2w&usqp=CAU&ec=48665701"
              alt="github"
              className="h-8 w-8 rounded-full"
            />
            </a>
            <h1 className="text-slate-800 text-bold text-2xl ml-5">{title}</h1>
          </div>
          <p>{desc}</p>
          <div className='flex justify-between'>
          <p className="mt-2">Created on {date}</p>
          <a href={runlink} target="/">
          <img className='h-8 w-10'
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeyZTdTibK3NmlA9dIdBLthH75wRqJmez3RGazxT4eyv-bF6N8"/>
          </a>
          </div>
          
        </div>
    </>
  )
}

export default ProjectCard
