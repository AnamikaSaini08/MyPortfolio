import React from 'react'

const Accordian = ({role,company,desc,time,location}) => {
  return (
    <div className="bg-white mx-5 flex border-2 border-red-300 rounded-lg p-2 max-w-full mb-2">
        <div className="w-1/12">
        <img className="max-h-20 max-w-12 rounded-full mt-5"
        src="https://media.istockphoto.com/id/1392801051/photo/alphabet-h.jpg?s=612x612&w=0&k=20&c=-Gd6lY9mlK7OUkjdo0oTat7FyVeS2XCN6h1XeGxZXN0=" alt="logo"/>
        </div>
        <div className="ml-10 flex justify-between">
        <div className="w-3/4">
            <h1 className="text-xl text-bold text-slate-800">{role}</h1>
            <h3 className="text-bold font-sans">{company}</h3>
            <p className='text-gray-600'>{desc} </p>
        </div>
        <div className="text-gray-600">
            <p>{time}</p>
            <p>{location}</p>
        </div>
        </div>
    </div>
  )
}

export default Accordian
