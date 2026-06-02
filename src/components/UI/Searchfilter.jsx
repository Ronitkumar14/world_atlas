import React from 'react'

const Searchfilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {
    const changeSearchText  =(event)=>{
        event.preventDefault() // to stop the reload of the page
        setSearch(event.target.value)
    }
    const changeRegionFilter=(event)=>{
        setFilter(event.target.value)
    }


    //sorting of the countries in ascending or descending order according to their alphabetical names!!!
    const sortcountries=(value)=>{

        //individual sorting of the countries(like comparison on the basis of Alphabet!!)
        const sortcountry=[...countries].sort((a,b)=>{
            return value==="asc"? a.name.common.localeCompare(b.name.common):
                                  b.name.common.localeCompare(a.name.common); //mtlab desc
        })
        setCountries(sortcountry) //An individual sort country will store in list-of-countries!!
    }
  return (
    <section className='search-searchfilter '>
        <div className="inputs grid grid-four-cols">
        <input type="text" placeholder='search' value={search} onChange={changeSearchText} />
       

        <div className='searchfilter-section'>
            <div className='ascending-button'>
                <button onClick={()=>sortcountries('asc')}>ASC</button>
            </div>
            <div className='descending-button'>
                 <button onClick={()=>sortcountries('desc')}>DESC</button>
            </div>
            <select className='select-section' value={filter} onChange={changeRegionFilter}   >
                <option value="all">ALL</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
               
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
         </div>

    </section>
    
  )
}

export default Searchfilter
