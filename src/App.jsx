import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movie from './components/Movie';
import Tvshows from './components/Tvshows';
import People from './components/People';
import NotFound from './components/NotFound';
// import Moviedetails from './components/Moviedetails'; // Uncomment when ready

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        {/* <Route path="/movie/details/:id" element={<Moviedetails />} /> */}
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/person" element={<People />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
