import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  if(!isMenuOpen) return null; //Early return pattern

  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className="">Home</h1>
      <h1 className="pt-3">Shorts</h1>
      <h1 className="pt-3">Subscriptions</h1>
      <h1 className="pt-3">Library</h1>
      <h1 className="pt-3">History</h1>
      <h1 className="pt-3">Watch Later</h1>
      <h1 className="pt-3">Liked Videos</h1>

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
        <li>Fashion & beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar