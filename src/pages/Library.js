import React from 'react'
import {ChannelNavbar} from "../components/index"
import {HomeSideBar,BigSideBar,ChannelBody} from "../components/index"
import {useAppContext} from "../context/appContext"
// import "./Home.css"
import "./LibBody.css"
import LibBody from "./LibBody"

const Library = () => {
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
         <LibBody/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Library
