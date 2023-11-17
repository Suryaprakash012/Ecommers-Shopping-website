import React from 'react'
import'./Main.css';
import HomeIcon from '@mui/icons-material/Home'
import {NavLink} from 'react-router-dom'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonPinIcon from '@mui/icons-material/PersonPin';
const Main = () => {
  return (
    <div className = 'side-nav'>
        <input type="checkbox" name="" id="menu" />
        <label htmlFor='menu' className='icon'>
        <div className="menu">
           
        </div>
        </label>
        <nav>
            <ul>
                <NavLink to='/home' >
                     <li>
                        <HomeIcon className='icons'> </HomeIcon>
                        <div className="menu-text">
                            Home
                        </div>
                     </li>
                </NavLink><br /><br />
                <NavLink to='/product'>
                     <li>
                        <ProductionQuantityLimitsIcon className='icons'></ProductionQuantityLimitsIcon>
                        <div className="menu-text">
                            about
                        </div>
                     </li>
                </NavLink>
                <br /><br />
                <NavLink to='/card'>
                     <li>
                        <AddBusinessIcon className='icons'></AddBusinessIcon>
                        <div className="menu-text">
                            catd
                        </div>
                     </li>
                </NavLink>
                <br /><br />
                <NavLink to='/'>
                     <li>
                        <HowToRegIcon className='icons'></HowToRegIcon>
                        <div className="menu-text">
                            RIGISTRATION
                        </div>
                     </li>
                </NavLink>
                <br /><br />
                <NavLink to='/display'>
                     <li>
                        <PersonPinIcon className='icons'></PersonPinIcon>

                        <div className="menu-text">
                            PROFILE
                        </div>
                     </li>
                </NavLink>
            </ul>
        </nav>
  </div>
  )
}

export default Main