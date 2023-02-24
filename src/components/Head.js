import React from 'react'
import Menu from '../images/menu.png';
import YTLogo from '../images/YTLogo.png'
import User from '../images/user.jpg'
import Search from '../images/search.png';

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-9" alt="menu" src={Menu}/>
        <img className="h-8 mx-2" alt="ytlogo" src={YTLogo}/>
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 pt-1.5 pb-1.5 rounded-l-full" type="text" />
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