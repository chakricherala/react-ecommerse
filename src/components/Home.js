import React from 'react'
import Header from './Header'
import HomeCover from './HomeCover';
import Slider from './Slider';
import Footer from './Footer';

export const Home = () => {
  return (
    <div>
        <Header />
        <HomeCover />
        <Slider />
        <Footer />
    </div>
  )
}

export default Home;