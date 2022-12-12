import React from 'react'
import "./LibBody.css"
import {AiOutlineHistory} from "react-icons/ai"
import {array} from '../utils2'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import {BsStopwatch} from "react-icons/bs"
import {MdPlaylistPlay} from "react-icons/md"
import {SlLike} from "react-icons/sl"
import {RiScissorsLine} from "react-icons/ri"
import {Link} from "react-router-dom"

const LibBody = () => {
  return (
    <div style={{padding:"20px"}}>
      {/*  */}
        <div style={{display:"flex",justifyContent:"space-between",padding:"0px 8px"}}>
            <div style={{display:"flex"}}>
            <AiOutlineHistory style={{fontSize:"30px",marginTop:"16px",marginRight:"20px"}}/>
            <p className='dark' style={{fontWeight:"bold"}}>History</p>
            </div>
            <p className='light' style={{fontWeight:"bold"}}>See All</p>
        </div>
      {/*  */}

      {/*  */}
      <div className='libraryInfo'>

      <div className='grids'>
      {
          array.slice(0,10).map((all)=>{
              return(
                <Link to="/singleVedio">
                  <div style={{marginBottom:"30px"}}>
                 <img src={all?.image}/>
                 <p className='dark' style={{color:"black"}}>{all?.title}</p>
                 <p className='light' style={{margin:"0px"}}>{all?.channel}</p>
                 <p className='light' style={{margin:"0px",marginTop:"10px"}}>{all?.view}</p>
            </div>
                </Link>
                  )
        })
    }
    </div>

    <div style={{margin:"20px 0px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
        style={{height:"100px",width:"100px"}}
        />
      <p className='dark'>Sardar Ali Murad Ali</p>
        </div>

      <div className='line'></div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <p className='light'  style={{margin:"0px"}}>Subscription</p>
        <p className='light'  style={{margin:"0px"}}>30</p>
      </div>
      <div className='line'></div>

      <div style={{display:"flex",justifyContent:"space-between"}}>
        <p className='light' style={{margin:"0px"}}>Uploads</p>
        <p className='light'  style={{margin:"0px"}}>2</p>
      </div>
      <div className='line'></div>

      <div style={{display:"flex",justifyContent:"space-between"}}>
        <p className='light' style={{margin:"0px"}}>Likes</p>
        <p className='light'  style={{margin:"0px"}}>200</p>
      </div>
      <div className='line' style={{margin:"0px"}}></div>

    </div>


    </div>

    <div className='line'></div>
      {/*  */}



      {/*  */}
        <div>
        <div style={{display:"flex",justifyContent:"space-between",padding:"0px 8px"}}>
            <div style={{display:"flex"}}>
            <BsStopwatch style={{fontSize:"30px",marginTop:"16px",marginRight:"20px"}}/>
            <p className='dark' style={{fontWeight:"bold"}}>Watch Later</p>
            <span className='light' style={{marginLeft:"10px",marginTop:"5px"}}>40</span>
            </div>
            <p className='light' style={{fontWeight:"bold"}}>See All</p>
        </div>
        </div> 

        <div className='grid'>
      {
          array.slice(0,4).map((all)=>{
              return(
                <Link to="/singleVedio">
                  <div style={{marginBottom:"30px"}}>
                 <img src={all?.image}/>
                 <p className='dark' style={{color:"black"}}>{all?.title}</p>
                 <p className='light' style={{margin:"0px"}}>{all?.channel}</p>
                 <p className='light' style={{margin:"0px",marginTop:"10px"}}>{all?.view}</p>
            </div>
                </Link>
                  )
        })
    }
    </div>
    <div className='line'></div>

      {/*  */}

      {/*  */}
       <div style={{display:"flex",flexDirection:"column"}}>
           <div style={{display:"flex"}}>
              <MdPlaylistPlay style={{fontSize:"38px",marginTop:"14px",marginRight:"10px"}}/>
              <p className='dark'>PLAYLISTS</p>
           </div>
           <p style={{margin:"0px"}} className='light'>Playlists you create or save will show up here.</p>
       </div>
       <div className='line'></div>
      {/*  */}

      {/*  */}
      <div>
        <div style={{display:"flex",justifyContent:"space-between",padding:"0px 8px"}}>
            <div style={{display:"flex"}}>
            <SlLike style={{fontSize:"30px",marginTop:"16px",marginRight:"20px"}}/>
            <p className='dark' style={{fontWeight:"bold"}}>Liked Vedios</p>
            <span className='light' style={{marginLeft:"10px",marginTop:"5px"}}>120</span>
            </div>
            <p className='light' style={{fontWeight:"bold"}}>See All</p>
        </div>
        </div> 

        <div className='grid'>
      {
          array.slice(0,3).map((all)=>{
              return(
                <Link to="/singleVedio">
              <div style={{marginBottom:"30px"}}>
                 <img src={all?.image}/>
                 <p className='dark' style={{color:"black"}}>{all?.title}</p>
                 <p className='light' style={{margin:"0px"}}>{all?.channel}</p>
                 <p className='light' style={{margin:"0px",marginTop:'10px'}}>{all?.view}</p>
            </div>
                </Link>
        )
        })
    }
    </div>
    <div className='line'></div>
      {/*  */}

      {/*  */}
      <div style={{display:"flex",flexDirection:"column"}}>
           <div style={{display:"flex"}}>
              <RiScissorsLine style={{fontSize:"38px",marginTop:"14px",marginRight:"10px"}}/>
              <p className='dark'>Yours Clips</p>
           </div>
           <p style={{margin:"0px"}} className='light'>Playlists you create or save will show up here.</p>
       </div>
      {/*  */}


    </div>
  )
}

export default LibBody
