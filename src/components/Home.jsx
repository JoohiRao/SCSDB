import React from 'react'
import Sidenav from './template/Sidenav'
import Topnav from './template/Topnav'
function Home() {
    document.title="SCSDB | Homepage"
  return (
    <>
    
            <Sidenav/>
            <div className="w-[80%]  h-full">
                 <Topnav/>
               
            </div>
    </>


  )
}

export default Home
