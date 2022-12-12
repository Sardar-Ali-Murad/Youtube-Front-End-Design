import React from 'react'
import {HomeSideBar,HomeNabar,BigSideBar,Body} from "../components/index"
import {useAppContext} from "../context/appContext"
import "./Home.css"
const Home = () => {
  let { openBigSideBar, closeMenu}=useAppContext()
  React.useEffect(()=>{
    closeMenu()
  },[])
  return (
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
          <HomeNabar/>
        </div>
      <Body/>
      </div>
    </div>
  )
}

export default Home
