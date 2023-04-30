import React from 'react';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const Degree = () => {
  return (
    <div>
        <h1 className='text-bold text-4xl text-slate-800 text-center'>Education and Degrees</h1>
        <div className='flex my-10'>
            <Roll><div>
                <img className='w-full rounded-full shadow-md'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzRuV9EP0mgOhGsTf8gshK_3YK-7zo6djnw&usqp=CAU"/>
            </div></Roll>
            <Fade right><div className='shadow-lg rounded-xl w-full ml-7'>
            <div className='w-full px-5 bg-orange-300 py-4 rounded-t-lg'>
                <div className='text-bold flex justify-between'>
                    <h1 className='text-2xl py-2'>Bachelor of Technology</h1>
                    <h1>2019 - 2023</h1>
                </div>
                <h1>Computer Science And Engineering</h1>
            </div>
            <div className='pb-4 pl-3'>
                    <p className='my-4'>⚡ Studying B.Tech CSE in United Institute Of Technology.</p>
                    <p>⚡ Secured <strong>9.2 CGPA</strong> till 6th Semester.</p>
            </div>
            <button className='px-3 py-2 bg-orange-300 rounded-lg mb-2 float-right mr-2'>Visit Website</button>
            </div></Fade>
        </div>


        <div className='flex my-10'>
            <Roll><div>
                <img className='w-full rounded-full shadow-md'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFSF-AA7A5LvLs7efMcJan0N6zSkv2ftrFg&usqp=CAU"/>
            </div></Roll>
            <Fade><div className='shadow-lg rounded-xl w-full ml-7'>
            <div className='w-full px-5 bg-orange-300 py-4 rounded-t-lg'>
                <div className='text-bold flex justify-between'>
                    <h1 className='text-2xl py-2'>Intermediate School</h1>
                    <h1>2017 - 2018</h1>
                </div>
                <h1>UP Class XII</h1>
            </div>
            <div className='pb-4 pl-3'>
                    <p className='my-4'>⚡ I have studied basic UP Board subjects and got 84% in Intermediate.</p>
                    <p>⚡ I was quite good in Computer Science and had good interest in it and got 98% in Computer Science.</p>
            </div>
            <button className='px-3 py-2 bg-orange-300 rounded-lg mb-2 float-right mr-2'>Visit Website</button>
            </div></Fade>
        </div>



        <div className='flex my-10'>
            <Roll><div>
                <img className='w-full rounded-full shadow-md'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFSF-AA7A5LvLs7efMcJan0N6zSkv2ftrFg&usqp=CAU"/>
            </div></Roll>
            <Fade><div className='shadow-lg rounded-xl w-full ml-7'>
            <div className='w-full px-5 bg-orange-300 py-4 rounded-t-lg'>
                <div className='text-bold flex justify-between'>
                    <h1 className='text-2xl py-2'>High School</h1>
                    <h1>2015 - 2016</h1>
                </div>
                <h1>UP Class X</h1>
            </div>
            <div className='pb-4 pl-3'>
                    <p className='my-4'>⚡ I have studied basic UP Board subjects and got 88.6% in HighSchool.</p>
                    <p>⚡ I was quite good in Computer Science starting from class 10 (used to fail before) and had good interest in it and got 99% in Computer Science.</p>
                    <p>⚡ I was good in Mathematics and scored 97% in Maths.</p>
            </div>
            <button className='px-3 py-2 bg-orange-300 rounded-lg mb-2 float-right mr-2'>Visit Website</button>
            </div></Fade>
        </div>
    </div>
  )
}

export default Degree
