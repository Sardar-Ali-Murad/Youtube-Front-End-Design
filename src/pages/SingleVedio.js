import React from 'react'
import HomeNavbar from "../components/HomeNabar"
import {FrontLayout,ReleatedVedios,Comments,BigSideBar} from "../components/index"
import "./SingleVedio.css"
import {arr8} from '../utils'
import { useAppContext } from '../context/appContext'

const SingleVedio = () => {
  let {openBigSideBar,showMenu}=useAppContext()
  React.useEffect(()=>{
      showMenu()
  },[])
  return (
    <div>
      <HomeNavbar/>
      {
        openBigSideBar && <BigSideBar/>
      }


    <div className="SingleVedioMainOverlay">

      <div className="firstLayout">
        <FrontLayout/>
          <div className='ReleatedVediosSecond'>
             <ReleatedVedios/>
          </div>
        <Comments/>
      </div>

       <div className='ReleatedVediosFirst'>
          <ReleatedVedios/>
       </div>

      </div>


    </div>
  )
}

export default SingleVedio
