import React from 'react'
import {ChannelNavbar} from "../components/index"
import {HomeSideBar,BigSideBar,ChannelBody} from "../components/index"
import {useAppContext} from "../context/appContext"
import "./Home.css"
import SubBody from "./SubscriptionBody"
import Register from './Register'

const Login = () => {
  let { openBigSideBar, closeMenu}=useAppContext()
  React.useEffect(()=>{
    closeMenu()
  },[])
  return (
    <div>
      <div>
       <div style={{display:"flex"}}>
      {!openBigSideBar &&
         <HomeSideBar/>
       }
      {
        openBigSideBar &&
        <BigSideBar/>
      }
      <div className={`body ${openBigSideBar?"bigOpen":""}`}>
        <div className='stickyNav'>
          <ChannelNavbar/>
        </div>
         <Register/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
