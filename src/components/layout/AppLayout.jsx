import React from 'react'
import Headers from "../UI/Headers.jsx"
import Footers from "../UI/Footers.jsx"
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
   <>
   <div className='App-layout'>
    <Headers/>
    <main>
    <Outlet/>
    </main>
    <Footers/>
    </div>
   </>
  )
}

export default AppLayout
