import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
const HeroSection = () => {
  return (
    <main className='hero-section main'>
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className='heading-xl'>
                    Explore the World,
                    <br />
                    One Country at a Time
                </h1>
                <p className='paragraph'>
                    Discover the history,culture and beauty of every nation,sort,search
                    and filter through countries to find the details you need
                </p>
                <button className='btn'>
                    Start Exploring  <FaLongArrowAltRight/>
                </button>
            </div>
            <div className="hero-image">
                <img src="./images/world-image.png" alt="world-beauty" className="banner-image"/>
            </div>
        </div>

    </main>
  )
}

export default HeroSection
