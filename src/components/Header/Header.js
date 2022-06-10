import React from 'react'
import './Header.css'
import Logo from './assets/Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const Header = () => {
    return (
        <div className='header' >
            <div className='logoContainer'>
                <h2 className='header'><img src={Logo} className="logo" alt="" /></h2>
            </div>
            <div className='searchbar'>
                <div className='searchIconContainer'>
                    <SearchIcon />
                </div>
                <input className='inputBar' placeholder='collection, item or user...' />
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='headerActions'>
                <div className='themeSwitchContainer' >
                    <LightModeRoundedIcon />
                </div>
            </div>
            <div className='loginButton'>
                <p>GET IN</p>
            </div>
        </div>
    )
}

export default Header