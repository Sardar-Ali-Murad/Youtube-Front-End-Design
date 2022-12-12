import React from 'react'
import "./BigSideBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {arr2,arr3,arr4,arr5,arr6,arr7} from "../utils"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';

const BigSideBar = () => {
  let {closeBig, openBigSideBar}=useAppContext()
  function close(){
    closeBig()
  }
  return (
    <div>
        <div className='overlay'></div>

      <div className={`BigSideBarMain ${openBigSideBar?"activeBar":"inactiveBar"}`}>
        
        {/*  */}

        <div className='firstPortion'>
        <MenuIcon onClick={()=>closeBig()} style={{cursor:"pointer",marginRight:"20px",marginLeft:"10px"}} fontSize="large"/>
        <YouTubeIcon fontSize='large' className="Youtube"/>
        <h5 style={{marginTop:"22px"}}>YouTube</h5>
        </div>

{/*  */}
        <div className='secondPart'>
          {
            arr2.map((all)=>{
                return(
                  <Link style={{color:"black"}} to={all?.link}>
                    <div onClick={close} className='singleCover'>
                <div  className='singleBigBar'>
                    <div>{all?.icon}</div>
                    <p className='SideBarText' style={{marginLeft:"30px"}}>{all?.text}</p>
                </div>
                </div>
                  </Link>
                    ) 
            })
          }
        </div>
        <div className='line'></div>
{/*  */}

        <div className='thirdPart'>
        {
            arr3.map((all)=>{
                return(
                  <Link style={{color:"black"}} to={all?.link}>
                    <div onClick={close} className='singleCover'>
                <div className='singleBigBar'>
                    <div>{all?.icon}</div>
                    <p className='SideBarText' style={{marginLeft:"30px"}}>{all?.text}</p>
                </div>
                </div>
                  </Link>
                    ) 
                })
            }
        </div>
     <div className='line'></div>

     {/*  */}

     <div className="fourthPart">
        <p >Sign To Like Vedios Comment and Suscribe</p>
        <Link to="/register">
          <Button onClick={()=>closeBig()} className="loginButton" variant="outlined" startIcon={<PersonOutlineIcon/>}>
            Login
         </Button>
        </Link>
     </div>
     <div className='line'></div>

     {/*  */}

     <div className='fifthPart'>
     {
            arr4.map((all)=>{
                return(
                    <div onClick={close} className='singleCover'>
                <div className='singleBigBar'>
                    <div>{all?.icon}</div>
                    <p className='SideBarText' style={{marginLeft:"30px"}}>{all?.text}</p>
                </div>
                </div>
                    ) 
                })
              }
     </div>
    <div className='line'></div>


{/*  */}

     <div className="sixthPart">
    { arr5.map((all)=>{
                return(
                    <div onClick={close} className='singleCover'>
                <div className='singleBigBar'>
                    <div>{all?.icon}</div>
                    <p className='SideBarText' style={{marginLeft:"30px"}}>{all?.text}</p>
                </div>
                </div>
                    ) 
                  })
            }
     </div>
    <div className='line'></div>

    {/*  */}

    <div className='seventhPart'>
        <h5 style={{color:"grey",marginLeft:"10px"}}>More From Youtube</h5>
        { arr6.map((all)=>{
                return(
                    <div onClick={close} className='singleCover'>
                <div className='singleBigBar'>
                    <div>{all?.icon}</div>
                    <p className='SideBarText' style={{marginLeft:"30px"}}>{all?.text}</p>
                </div>
                </div>
                    ) 
                  })
                }
    </div>
    <div className='line'></div>

    {/*  */}

    <div className='EighthPart'>
    { arr7.map((all)=>{
      return(
                    <div onClick={close} className='singleCover'>
                <div className='singleBigBar'>
                    <div>{all?.icon}</div>
                    <p className='SideBarText' style={{marginLeft:"30px"}}>{all?.text}</p>
                </div>
                </div>
                    ) 
                  })
                }
    </div>
    <div className='line'></div>

    {/*  */}

    <div className='ninethPart'>
      <h5 style={{marginLeft:"8px"}}> About Press CopyrightContact usCreatorsAdvertise Developers </h5>
      <h5 style={{marginLeft:"8px"}}>  TermsPrivacyPolicy & SafetyHow YouTube worksTest new features </h5>
      <p style={{fontSize:"12px",marginLeft:"10px"}}>&copy; 2022 Google LLC </p>
    </div>
      
        
    </div>
    

    </div>
  )
}

export default BigSideBar
