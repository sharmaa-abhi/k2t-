import React from 'react'
import Video from '../home/Video'
import HomeHeroText from '../home/HomeHeroText'
import HomeBottomText from '../home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed mt-20px'>
            <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden justify-between flex flex-col'>
            <HomeHeroText />
            <HomeBottomText />      
      </div>
    </div>
  )
}

export default Home