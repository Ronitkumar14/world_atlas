import React, { useState } from 'react'
import { getCountryData } from '../API/PostAPI'
import { useTransition,useEffect } from 'react'
import Searchfilter from "../components/UI/Searchfilter";
import Loader from "../components/UI/Loader"
import CountryCard from '../components/layout/CountryCard';
const Country = () => {
  const [countries, setCountries] = useState([])
  const [isPending,startTransition]=useTransition()

  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    //here you are calling an API
    startTransition(async()=>{
      const res=await getCountryData()

      setCountries(res.data)
    })
  }, [])
  if(isPending) return <Loader/>
  console.log(search,filter)


  //if i search an country on search button
  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
  }

  const filterregion=(country)=>{
    if(filter==="all") {
      return country;
    }
    else{
      return  country.region===filter;
    }
    
  }

  //filter countries (it means when you search an country on search box it checks that this country is present or not? or this country is present in your region or not?)
  const filterCountries=countries.filter((country)=>{
    return searchCountry(country) && filterregion(country)
  })

  return (
    <section>
      <Searchfilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} 
      countries={countries} setCountries={setCountries}></Searchfilter>

      <ul className='grid grid-four-cols'></ul>
      {
        filterCountries.map((curCountry,index)=>{
          return <CountryCard country={curCountry} key={index}/>
        })
      }

    </section>
  )
}

export default Country
