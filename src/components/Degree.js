import React from 'react'

const Degree = () => {
  return (
    <div>
        <h1 className='text-bold text-4xl text-slate-800 text-center'>Education and Degrees</h1>
        <div className='flex my-10'>
            <div>
                <img className='w-full rounded-full shadow-md'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzRuV9EP0mgOhGsTf8gshK_3YK-7zo6djnw&usqp=CAU"/>
            </div>
            <div className='shadow-lg rounded-xl w-full ml-7'>
            <div className='w-full px-5 bg-orange-300 py-4 rounded-t-lg'>
                <div className='text-bold flex justify-between'>
                    <h1 className='text-2xl py-2'>Bachelor of Technology</h1>
                    <h1>2019 - 2023</h1>
                </div>
                <h1>Computer Science And Engineering</h1>
            </div>
            <div className='pb-4 pl-3'>
                    <p className='my-4'>⚡ Studying B.Tech IT in RCC Institute of Information Technology.</p>
                    <p>⚡ Won few coding contest hosted by the Tech Club of College, and will win more</p>
            </div>
            <button className='px-3 py-2 bg-orange-300 rounded-lg mb-2 float-right mr-2'>Visit Website</button>
            </div>
        </div>


        <div className='flex my-10'>
            <div>
                <img className='w-full rounded-full shadow-md'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFSF-AA7A5LvLs7efMcJan0N6zSkv2ftrFg&usqp=CAU"/>
            </div>
            <div className='shadow-lg rounded-xl w-full ml-7'>
            <div className='w-full px-5 bg-orange-300 py-4 rounded-t-lg'>
                <div className='text-bold flex justify-between'>
                    <h1 className='text-2xl py-2'>Intermediate School</h1>
                    <h1>2017 - 2018</h1>
                </div>
                <h1>UP Class XII</h1>
            </div>
            <div className='pb-4 pl-3'>
                    <p className='my-4'>⚡ I have studied basic ISC subjects and got 84% in Best of 3 subjects.</p>
                    <p>⚡ I was quite good in Computer Science and had good interest in it and got 98% in Computer Science.</p>
            </div>
            <button className='px-3 py-2 bg-orange-300 rounded-lg mb-2 float-right mr-2'>Visit Website</button>
            </div>
        </div>



        <div className='flex my-10'>
            <div>
                <img className='w-full rounded-full shadow-md'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFSF-AA7A5LvLs7efMcJan0N6zSkv2ftrFg&usqp=CAU"/>
            </div>
            <div className='shadow-lg rounded-xl w-full ml-7'>
            <div className='w-full px-5 bg-orange-300 py-4 rounded-t-lg'>
                <div className='text-bold flex justify-between'>
                    <h1 className='text-2xl py-2'>High School</h1>
                    <h1>2015 - 2016</h1>
                </div>
                <h1>UP Class X</h1>
            </div>
            <div className='pb-4 pl-3'>
                    <p className='my-4'>⚡ I have studied basic ICSE subjects and got 86% in Best of 4 subjects.</p>
                    <p>⚡ I was quite good in Computer Science starting from class 10 (used to fail before) and had good interest in it and got 99% in Computer Science.</p>
                    <p>⚡ I was good in Mathematics and scored 97% in Maths.</p>
            </div>
            <button className='px-3 py-2 bg-orange-300 rounded-lg mb-2 float-right mr-2'>Visit Website</button>
            </div>
        </div>
    </div>
  )
}

export default Degree