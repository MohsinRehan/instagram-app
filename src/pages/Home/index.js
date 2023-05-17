import React from 'react'
import { Pagelayout } from '../../layout';
import InstagramStory from '../../component/status';
import Post from '../../component/Post';
import Profile from '../../component/Profileright';

const Home = () => {
  return (
    <Pagelayout>
      <div className='ml-[280px]'>
      <InstagramStory/>
      <Post/>
      </div>
      <Profile/>
    </Pagelayout>
  )
}

export default Home;