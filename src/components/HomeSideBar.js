import * as React from 'react';
import "./HomeSideBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import {arr} from "../utils"
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';

const HomeSideBar = () => {
  let {openBig, openBigSideBar}=useAppContext()
  console.log( openBigSideBar)
  return (
      <div className='SidebarMain'>
        <MenuIcon style={{cursor:"pointer"}} onClick={()=>openBig()} className='menu' fontSize='large'/>

        <div className="SideBarIconsMain">
        {
          arr.map((all)=>{
            return(
              <Link style={{color:"black",width:"100%"}} to={all?.link}>
              <div className='singles'>
                <div>{all?.icon}</div>
                <p className='SideBarText'>{all?.text}</p>
              </div>
              </Link>
            )
          })
        }
        </div>


      </div>
  )
}

export default HomeSideBar
