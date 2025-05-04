import React from "react";
import { Link } from "react-router-dom";
import noimage from '/noimage.jpg';
import Dropdown from "./Dropdown";


const HorizontalCards = ({ data }) => {
    if (!data || data.length === 0) {
      return (
        <div className="w-[100%] flex p-5 overflow-y-hidden">
          <h1 className="text-3xl text-white font-black text-center mt-5">Nothing to show</h1>
        </div>
      );
    }
  
    return (
      <div className="w-[100%] flex p-5 overflow-y-hidden">
        {data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-[52vh] bg-zinc-800 mb-5 mr-5"
          >
            <img
              className="w-full h-[50%] object-cover"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`
                  : noimage
              }
              alt=""
            />
  
            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className="text-xl font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mt-2">
                {d.overview ? d.overview.slice(0, 50) : ""}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  

  export default HorizontalCards