import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Topnav() {
  const [query, setQuery] = useState("");
  const[searches,setsearches] = useState([]);

  return (
    <div className="w-[75%] h-[10vh] relative flex mx-auto items-center pl-[5%]">
      
      <i className="text-zinc-400 text-3xl ri-search-line"></i>

      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="text-white outline-none border-none mx-10 p-5 text-xl bg-transparent w-[50%]"
        type="text"
        placeholder="Search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl cursor-pointer absolute right-10 text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="z-50 absolute w-full max-h-[50vh] bg-zinc-700 top-[89%] mt-2 rounded shadow-lg overflow-auto scrollbar-custom">

        {searches.map((s,i)=>(
             <Link
             to="/"
             className="w-full p-2 flex justify-start items-start border-2 border-zinc-400 rounded hover:bg-zinc-800 font-semibold duration-200 gap-5"
           >
             <img src="" alt="" />

             {/* here also i want to put image */}
             <span>{s.name || s.title || s.original_name || s.original_title}</span>
           </Link>


        ))}
       
      </div>
    </div>
  );
}

export default Topnav;
