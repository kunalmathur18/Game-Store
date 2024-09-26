
import React, { useState } from 'react';
import './SideMenu.css';
import navListData from '../data/navListData';
import NavlistItem from './NavlistItem';

function SideMenu({ active,sectionActive }) {
    const [navData, setNavData] = useState(navListData);
    const handleNavOnClick = (id,target) =>{
        // console.log(id)  
        const newNavData = navData.map(nav=>{
            nav.active=false
            if(nav._id ===id) nav.active=true;
            return nav;
        });
        setNavData(newNavData);
        sectionActive(target);
        
    }

    return (
        <div className={`sidemenu ${active ? 'active' : ''}`}>
            <a href="#" className='logo'>
                <i className="bi bi-controller text-[rgb(114 200 195)]"></i>
                <span className='brand'>Game</span>
            </a>
            <ul className='nav'>
                {navData.map(item => (
                    <NavlistItem key={item._id} item={item} navOnClick ={handleNavOnClick} />
                ))}
            </ul>
        </div>
    );
}

export default SideMenu;
