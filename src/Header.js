import React from 'react'
import './Header.css';
import  PersonIcon from '@material-ui/icons/Person';
import  ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
            </IconButton >
            <img 
            className="header__logo"
            src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png" alt="" srcset="" />
            <IconButton>
                <ForumIcon  fontSize="large" className="header__icon" />
            </IconButton >
        </div>
    )
}

export default Header
