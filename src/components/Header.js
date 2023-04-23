import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between pt-10 h-30'>
    <div>
        <h1 className='agustina-regular'> {'<'} Anamika Saini {'/>'} </h1>
    </div>
    <div className='pb-5'>
        <ul className='flex '>
            <Link to='/'><li className='mx-6 hover:bg-white px-3 py-2'>Home</li></Link>
            <Link to='/education'><li className='mx-6 hover:bg-white px-3 py-2'>Education</li></Link>
            <Link to='/experience'><li className='mx-6 hover:bg-white px-3 py-2'>Experience</li></Link>
            <Link to='/projects'><li className='mx-6 hover:bg-white px-3 py-2'>Projects</li></Link>
            <Link to='/contactme'><li className='ml-6 hover:bg-white px-3 py-2'>Contact Me</li></Link>
        </ul>
    </div>
    </div>
  )
}

export default Header;
