import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  if(!isMenuOpen) return null; //Early return pattern

  return (
    <div>
    <div className="flex p-4 mr-4 w-52 max-h-screen overflow-y-auto flex-col">
      {/* <h1 className="">Home</h1>
      <h1 className="pt-3">Shorts</h1>
      <h1 className="pt-3">Subscriptions</h1>
      <h1 className="pt-3">Library</h1>
      <h1 className="pt-3">History</h1>
      <h1 className="pt-3">Watch Later</h1>
      <h1 className="pt-3">Liked Videos</h1> */}
      <ul>
        <li className="pt-3 ml-4"><Link to="/">Home</Link></li>
        <li className="pt-3 ml-4">Shorts</li>
        <li className="pt-3 ml-4">Subscriptions</li>
        <li className="pt-3 ml-4">Library</li>
        <li className="pt-3 ml-4">History</li>
        <li className="pt-3 ml-4">Watch Later</li>
        <li className="pt-3 ml-4">Liked Videos</li>
      </ul>

      <h1 className="font-bold pt-5 ml-4">Subscriptions</h1>
      <ul>
        <li className="ml-4">Music</li>
        <li className="ml-4">Sport</li>
        <li className="ml-4">Gaming</li>
        <li className="ml-4">Films</li>
      </ul>
      <h1 className="font-bold pt-5 ml-4">Explore</h1>
      <ul>
        <li className="ml-4">Trending</li>
        <li className="ml-4">Shopping</li>
        <li className="ml-4">Music</li>
        <li className="ml-4">Films</li>
        <li className="ml-4">Live</li>
        <li className="ml-4">Gaming</li>
        <li className="ml-4">News</li>
        <li className="ml-4">Sport</li>
        <li className="ml-4">Learning</li>
        <li className="ml-4">Fashion</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar