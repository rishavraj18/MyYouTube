import React, { useEffect, useState } from 'react'
import Menu from '../images/menu.png';
import YTLogo from '../images/YTLogo.png'
import User from '../images/mypic.jpg'
import Search from '../images/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {   
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);

      //update cache
      dispatch(cacheResults({
        [searchQuery] : json[1],
      }));
    };
    
     // API call
    const timer = setTimeout(() => {
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
     } else {
      getSearchSuggestions()
     }
    } , 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
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
       <div>
        <input 
        className = "w-1/2 border border-gray-400 pt-1.5 pb-1.5 pl-3 rounded-l-full" 
        type = "text" 
        placeholder="Search"
        value = {searchQuery}
        onChange = {(e) => setsearchQuery(e.target.value)}
        onFocus = {() => setShowSuggestions(true)}
        onBlur = {() => setShowSuggestions(false)}
        onMouseEnter={() => setShowSuggestions(true)}
        onMouseLeave={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 pt-1 pb-3 pl-6 rounded-r-full bg-gray-200">
          <img className="h-5 pr-5 pt-1.5" alt="search" src={Search}/>
        </button>
       </div>
       
       {showSuggestions && searchQuery  && (
        <div className="fixed bg-white pt-2 px-2 w-[27.5rem] h-84 rounded-xl shadow-lg border border-gray-100" onMouseEnter={() => setShowSuggestions(true)} onMouseLeave={() => setShowSuggestions(false)}>
        {suggestions.map(s => 
           <div key={s} class="flex items-center hover:bg-gray-100">
           <img className="h-4 pr-2 pt-1" alt="search" src={Search}/>
          <div className="py-1"><span>{s}</span></div>
          </div>
        )}
        <div className="text-right mt-3 mb-2 text-gray-400 text-sm">Report search predictions</div>
       </div>
       )}
       
      </div>
      <div  className="col-span-1">
        <img className="h-8 rounded-2xl" alt="user" src={User}/>
      </div>
    </div>
  )
}

export default Head