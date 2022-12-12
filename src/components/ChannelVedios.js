import React from 'react'
import "./ChannelVedios.css"
import {arr12} from "../utils"
import { Link } from 'react-router-dom'

const ChannelVedios = () => {
  return (
    <div>
      {
        arr12.map((all)=>{
            return(
              <Link to="/singleVedio">
                <div className='singleChannelVedio'>
                    <img src={all?.image}/>

                    <div className='titleDes' style={{marginTop:'10px'}}>
                    <p className='dark' style={{fontSize:"22px",color:"black"}}>{all?.title}</p>
                    <div>
                    <p className='light' style={{margin:"0px",marginBottom:"10px"}}>{all?.info}</p>
                    <p className='light' style={{margin:"0px"}}>{all?.des}</p>
                    </div>
                    </div>

                </div>
                </Link>
            )
        })
      }

      <div className='line' style={{width:"80%",marginLeft:"10%"}}></div>
    </div>
  )
}

export default ChannelVedios
