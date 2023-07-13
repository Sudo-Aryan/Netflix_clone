import React, { useEffect, useState } from 'react';
import './Home.scss';
import Row from './Row/Row';
import { getPopular, getUpcoming, getTopRated, getNowPlaying } from '../api/Category_Movie/getMovieInfo';

const Home = () => {

  const[popularMovies, setPopularMovies] = useState([{}]);
  const[upcomingMovies, setUpComingMovies] = useState([{}]);
  const[topRatedMovies, setTopRatedMovies] = useState([{}]);
  const[nowPlayingMovies, setNowPlayingMovies] = useState([{}]);

  const getMovieData = async (getData, setData) => {
      try{
        const response = await fetch(getData);
        const jsonData = await response.json();
        // console.log(jsonData.results)
        setData(jsonData);
      } catch(error){
        console.log('Error while fetching data from server ',error);
      }
    };

    const bannerData = popularMovies.results[2];

  useEffect(()=>{
    getMovieData(getPopular,setPopularMovies);
    getMovieData(getUpcoming, setUpComingMovies);
    getMovieData(getTopRated, setTopRatedMovies);
    getMovieData(getNowPlaying, setNowPlayingMovies);
  },[]);

  return (
    <section className='home'>
      <div className='banner-box'>
        <div className="banner-content">
            { bannerData && <h1>{bannerData.original_title}</h1> }
            { bannerData && <p>{bannerData.overview}</p> }
          </div>

          <img src='https://m.media-amazon.com/images/S/pv-target-images/3d5050244eb4e3b46774548bc030134bfcecbc863846a0e45f1ce3a80b71bbc8._UR1920,1080_.jpg' className="banner" />
      </div>

        {/* {console.log(data)} */}
        <Row title={"Popular"} arr={popularMovies.results}/>
        <Row title={"Upcoming"} arr={upcomingMovies.results}/>
        <Row title={"Top Rated"} arr={topRatedMovies.results}/>
        <Row title={"Now Playing"} arr={nowPlayingMovies.results}/>
    </section>
  )
}

export default Home
