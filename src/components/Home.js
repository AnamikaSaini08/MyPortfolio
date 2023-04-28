import React from 'react'
import Header from './Header'
import About from './About'
import MyWork from './MyWork';

const Home = () => {
  return (
    <div className='max-w-full'>
      <About/>
      <MyWork/>
    </div>
  )
}

export default Home
