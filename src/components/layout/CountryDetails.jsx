import React from 'react'
import { useState,useEffect,useTransition } from 'react'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Loader from '../UI/Loader'
import { getCountryindividualData } from '../../API/PostAPI'
const CountryDetails = () => {
  const params=useParams()
  const [isPending,startTransition]=useTransition()
  const [country, setCountry] = useState(null)
  useEffect(() => {
    startTransition(async()=>{
      try{
      const res=await getCountryindividualData(params.countryName)
      //200 is just like message that indicates the server give the data successfully!!

      if(res.status===200){
        setCountry(res.data[0])
         console.log("Params ID:", params.id);
         console.log("API Response:", res);
      }
    } catch(error){
      console.log("Error fetching data:",error)
    }
      
    })
    
  }, [params.id])
  if(isPending) return <Loader/>

  
  return (
   <section className='country-details-card container'>
    <div className="container-card ">
      {
        country &&(
          <div className="country-image ">
            <img src={country.flags.svg} alt={country.flags.alt}  className='flag'/>
            <div className="country-content">
              <p className='card-title'>
                {country.name.official} 
              </p>
              <div className="info-container">
                <p>
                  <span className='card-description'>Native Names:  </span>

                  {/* if native name exist then print their native country otherwise print N:A */}
                  {
                     country.name.nativeName? Object.keys(country.name.nativeName).map((key)=>
                      country.name.nativeName[key].common).join(","):"N/A"
                  } 
                </p>
                <p>
                  <span className='card-description'>Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className='card-description'>Region:  </span>{country.region}
                </p>
                <p>
                  <span className='card-description'>Sub-Region:  </span>{country.subregion}
                </p>
                <p>
                  <span className='card-description'>Capital:  </span>{country.capital? country.capital.join(","):"N/A"}
                </p>
                <p>
                  <span className='card-description'>Top-Level: </span>{country.tld[0]}
                </p>
                <p>
                  {/* if currencies exist of an specific country then the currencies will be print in arrayofcurrencies!! otherwise print - N:A */}
                  <span className='card-description'>Currencies</span>
                  {country.currencies? Object.keys(country.currencies).map((curElem)=>country.currencies[curElem].name).join(","):  ":  N/A"}
                </p>
                <p>
                  {/* if languages exist of an specific country then the language will be print in arrayoflanguages!! otherwise print - N:A  */}
                  <span className='card-description'>Languages</span>
                  {
                  country.languages? Object.keys(country.languages).map((key)=>country.languages[key]).join(" ,"):":  N/A"}
                </p>
                
              </div>
            </div>
          </div>
        )}
        <div className="country-card-button">
          <NavLink to={"/country" } className="BackBtn">
          <button>
            Go Back
          </button>
          </NavLink>
        </div>
    </div>

   </section>
  )
}

export default CountryDetails
