import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Apps } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import  Search from "./Search";

function Home() {
  return (
    <div className='home'>

        <div className='home__header'>
            <div className='home__headerLeft'>
              <Link to="about">About</Link>
              <Link to="about">Store</Link>
            </div>
            <div className='home__headerRight'>
              <Link to="about">Gmail</Link>
              <Link to="about">Images</Link>
              <Apps /> 
              <Avatar />
             </div>
        </div>

        <div className='home__body'>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
        <div className='home__inputContainer'>
          <Search hideButtons />
        </div>     
        </div>
    </div>
  )
}

export default Home;
