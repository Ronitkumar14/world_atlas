import axios from "axios"

const api=axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

// Get Request
export const getCountryData=()=>{
    return api.get("/all?fields=name,population,region,capital,flags")
}
// when i search an individual country then i will get the data of individual country
export const getCountryindividualData=(name)=>{
    return api.get(
        `/name/${name}?fulltext=true&fields=name,population,region,subregion,tld,capital,flags,borders`)
}