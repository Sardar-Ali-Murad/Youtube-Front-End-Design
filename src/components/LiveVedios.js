import React from 'react'
import {arr13} from "../utils"
import "./LiveVedios.css"
import { Link } from 'react-router-dom'

const LiveVedios = () => {
  return (
    <div>
        <p className='dark' style={{fontSize:"30px",marginLeft:"80px"}}>Live Now</p>
    <div style={{display:"flex",flexWrap:"wrap",paddingLeft:"80px"}}>
      {
        arr13.map((all)=>{
            return(
                <Link to="/singleVedio">
                <div style={{marginBottom:"30px"}}>
                <img src={all?.image} style={{height:"200px",width:"200px"}}/>
                <p className='dark' style={{margin:"0px",width:"70%",color:"black",marginTop:"10px",marginBottom:"10px"}}>{all?.title}</p>
                <p className='light' style={{margin:"0px"}}>{all?.info}</p>
              </div>
                </Link>
                ) 
        })
    }
      {/* <div className='line' style={{width:"90%",marginLeft:"3%"}}></div> */}
      
      <div className='line' style={{width:"90%",marginLeft:"3%"}}></div>
    </div>
    </div>
  )
}

export default LiveVedios
