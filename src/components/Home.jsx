import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import Header from './templates/Header'
import axios from "../utils/axios"
import HorizontalCards from './templates/HorizontalCards'
const Home = () => {

    document.title="SCSDB || Homepage"
    const [wallpaper,setwallpaper]=useState(null)
     const [trending, setTrending] = useState(null);
     const [category, setCategory] = useState("all");

    const GetHeaderWallpaper=async()=>{
        try{
            const {data}=await axios.get(`/trending/all/day`)
            let randomdata=

           // Pick a random item from the results array
            data.results[(Math.random()*data.results.length).toFixed()]

            //// Update state with the randomly selected wallpaper data
            setwallpaper(randomdata)
        }
        catch(error){
            console.log("error",error)
        }
    }

    const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
     
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

    useEffect(()=>{

      //if wallpaper is falsy
        !wallpaper && GetHeaderWallpaper()
        getTrending()
    },[category])

  return wallpaper? (
    <div className='flex w-[100%]'>
        <Sidenav/>
        <div className='w-[80%] h-full overflow-auto overflow-x-hidden scrollbar-custom'>
            <Topnav/>

            {/* //we send data as a prop to get header */}
            <Header data={wallpaper}/>
            <HorizontalCards data={trending}/>
        </div>
   
    </div>
  ):(<div>hellp</div>)
}

export default Home
