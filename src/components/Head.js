import React from 'react'
import Menu from '../images/menu.png';
import YTLogo from '../images/YTLogo.png'
import User from '../images/user.jpg'

const Head = () => {
  return (
    <div>
      <div>
        <img alt="menu" src={Menu}/>
        <img alt="ytlogo" src={YTLogo}/>
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <img alt="user" src={User}/>
      </div>
    </div>
  )
}

export default Head