import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  if(!isMenuOpen) return null; //Early return pattern

  return (
    <div className="p-6 mr-5 w-60">
      {/* <h1 className="">Home</h1>
      <h1 className="pt-3">Shorts</h1>
      <h1 className="pt-3">Subscriptions</h1>
      <h1 className="pt-3">Library</h1>
      <h1 className="pt-3">History</h1>
      <h1 className="pt-3">Watch Later</h1>
      <h1 className="pt-3">Liked Videos</h1> */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="pt-3">Shorts</li>
        <li className="pt-3">Subscriptions</li>
        <li className="pt-3">Library</li>
        <li className="pt-3">History</li>
        <li className="pt-3">Watch Later</li>
        <li className="pt-3">Liked Videos</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Films</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learning</li>
        <li>Fashion</li>
      </ul>
    </div>
  )
}

export default Sidebar