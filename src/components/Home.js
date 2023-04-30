import React from 'react'
import About from './About'
import MyWork from './MyWork';

const Home = () => {
  return (
    <div className='max-w-full overflow-x-auto'>
      <About/>
      <MyWork/>
    </div>
  )
}

export default Home
