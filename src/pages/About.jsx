import React from 'react'
import Countryfacts from "../API/Countrydata.json"
const About = () => {
   
  return <section>
    <div className="section-about">
     
        <h2 className="container-title">here are some Interesting facts
          <br />
          We're proud of
        </h2>
        <div className="gradient-cards grid grid-three-cols">
          {
            Countryfacts.map((country)=>{
              const{id,countryName,population,capital,interestingFact}=country
              return (
                <div className="card" key={id}>
                  <div className="container-card  bg-blue-box">
                    <p className='card-title'>
                      <span> {countryName}</span> 
                    </p>
                    <p className='card-description'>
                      <span>capital: </span> {capital}
                    </p >
                    <p className='card-description'>
                      <span>Population:</span> {population}
                    </p>
                    <p className='card-description'>
                      <span>interestingFact:</span> {interestingFact}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      
    </div>
  </section>
  
}

export default About
