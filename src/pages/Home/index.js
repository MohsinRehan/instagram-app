import React from 'react'
import { Pagelayout } from '../../layout';
import InstagramStory from '../../component/status';
import Post from '../../component/Post';
import Profile from '../../component/Profileright';

const Home = () => {
  return (
    <Pagelayout>
      <div>
      <InstagramStory/>
      <Post/>
      </div>
      <Profile/>
    </Pagelayout>
  )
}

export default Home;