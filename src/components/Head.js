import React, { useEffect, useState } from 'react'
import Menu from '../images/menu.png';
import YTLogo from '../images/YTLogo.png'
import User from '../images/user.jpg'
import Search from '../images/search.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {   
    const getSearchSuggestions = async () => {
      console.log(searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      //console.log(json[1]);
    };
    /**
     *  Make an API call after every keypress but if the difference between 2 API calls is <200ms 
     *  else decline the API call
     * 
     * key - i
     * - render the component
     * - useEffect();
     * - start timer => make api call after 200ms
     * 
     * key - ip
     * - destroy the component(useEffect return method)
     * - re-render the component
     * - useEffect();
     * - start timer => make api call after 200ms
     * 
     */
     // API call
    const timer = setTimeout(() => getSearchSuggestions(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
  

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img onClick={() => toggleMenuHandler()}
        className="h-9 cursor-pointer" alt="menu" src={Menu}/>
        <a href="/">
        <img 
        className="h-8 mx-2" alt="ytlogo" src={YTLogo}/>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input 
        className = "w-1/2 border border-gray-400 pt-1.5 pb-1.5 pl-2 rounded-l-full" 
        type = "text" 
        value = {searchQuery}
        onChange = {(e) => setsearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 pt-1 pb-3 pl-6 rounded-r-full bg-gray-200">
          <img className="h-5 pr-5 pt-1.5" alt="search" src={Search}/>
        </button>
      </div>
      <div  className="col-span-1">
        <img className="h-8" alt="user" src={User}/>
      </div>
    </div>
  )
}

export default Head