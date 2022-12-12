import React from 'react'
import {arr14,arr15} from "../utils"
import {FaPlay} from "react-icons/fa"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const PreLive = () => {
  return (
    <div>
        <div style={{display:"flex",alignItems:"center"}}>
        <p className='dark' style={{marginLeft:"80px",fontSize:"30px"}}>Paranova | Livestream</p>
        <FaPlay style={{fontSize:"28px",margin:"0px 20px"}}/>
        <p className='light' style={{marginTop:"20px"}}>PLAY ALL</p>
        </div>

    <div style={{display:"flex",flexWrap:"wrap",paddingLeft:"80px"}}>
       {
           arr14.map((all)=>{
               return(
                <Link to="/singleVedio">
                <div style={{marginBottom:"30px"}}>
                    <img src={all?.image} style={{height:"200px",width:"200px"}}/>
                    <p className='dark' style={{margin:"0px",marginBottom:"20px",width:"80%",color:"black"}}>{all?.title}</p>
                    <p className='light'  style={{margin:"0px"}}>{all?.subtitle}</p>
                    <p className='light'  style={{margin:"0px"}}>{all?.info}</p>
                </div>
                </Link>
            )
        })
       }

        <div className='line' style={{width:"90%",marginLeft:"3%"}}></div>
    </div>

{/*  */}
     <div style={{display:"flex",flexWrap:"wrap",paddingLeft:"80px"}}>
    {
        arr15.map((all)=>{
            return <div style={{marginLeft:"30px",marginBottom:"40px"}}>
                <img src={all?.image} style={{height:"100px",width:"100px",borderRadius:"50%"}}/>
                <p className='dark' style={{margin:"0px",marginBottom:"10px"}}>{all?.name}</p>
                <p className='light' style={{margin:"0px",marginBottom:"30px"}}>{all?.views}</p>
                <Button variant='contained' style={{background:"grey"}}>Subscribe</Button>
            </div>
        })
    }
    </div>
<div className='line' style={{width:"90%",marginLeft:"6%"}}></div>

{/*  */}
        </div>
  )
}

export default PreLive
