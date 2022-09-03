import React, { useState } from 'react'
import './Sidebar.css';
import { SideBarData } from '../Data/Data';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [selected,setSelected] = useState(0);

  return (
    <div className='Sidebar'>
        <div className='logo'>
            <img src='https://i.postimg.cc/Xvmtx0VV/Street-Hub-2.png' />
        </div>
        <div className='menu'>
            {SideBarData.map((item,index) => {
                return(
                    <Link className='link' to={item.path}>
                    <div className={selected === index?'menu_item active' : "menu_item"} 
                    key={index}
                    onClick={()=>setSelected(index)}>       
                            <img className='menu_item_img' src={item.icon} />
                        <span>{item.heading}</span>
                    </div>
                    </Link>
                )
            })}
            <a className='link' href='/Login'>
            <div className='menu_item'>
                <img className='menu_item_img' src='https://img.icons8.com/ios-filled/344/logout-rounded.png' />
                <span>Sign Out</span>
            </div>
            </a>
        </div>
      
    </div>
  )
}

export default Sidebar;
