

import React from 'react'
import HeroSlider from '../Components/UI/HeroSlider/HeroSlider'
import TrendsSection from '../Components/UI/TrendsSection/TrendsSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import Benefits from '../Components/Benefits/Benefits';

const Home = () => {
  return (
    <section className='p-0 hero__slider-section'>
      <HeroSlider />
      <TrendsSection />
      <Benefits />
    </section>
  )
}

export default Home