import React from 'react';
import Meteors from '../meteors/meteors.tsx';
import Header from './Header';

const Home = () => {
  return (
    <div className='Home-Container'>
    <Meteors />
    <Header />
    </div>
  )
} 

export default Home;