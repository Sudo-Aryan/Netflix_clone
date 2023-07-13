import React from 'react'
import './Header.scss';
import logo from '../../Images/netflix_logo.png';
import { Link } from 'react-router-dom';
import {ImSearch} from 'react-icons/im';

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt='Network Error!!' />
        <div>
            <Link to='/tv_shows'>TV SHOWS</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/recent'>Recently Watched</Link>
            <Link to='/my_favorite'>Your Favorites</Link>
        </div>
        <ImSearch />
    </nav>
  )
}
export default Header