import React from 'react';
import './Navbar.css';
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from 'react-router-dom';
import sagar from "../../assets/sagar.png"


const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img src={menu} className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} alt="" />
            <Link to={"/"}><img src={logo} className='logo' alt="" /></Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type="text"  placeholder='Search' />
            <img src={search} alt="" />
            </div>
            
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={sagar} className='user-icon' alt="" />
        </div>

    </nav>
  )
}

export default Navbar