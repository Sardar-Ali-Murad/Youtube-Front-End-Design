import React from 'react'
import {arr9} from "../utils"
import { Link } from 'react-router-dom'
import "./ReleatedVedios.css"

const ReleatedVedios = () => {
  return (
    <div className='ReleatedVediosMain'>
             {
        arr9.map((all)=>{
            return(
              <Link style={{color:"black"}} to="/singleVedio">
                <div className='single'>

                    <img  className='bigImage' style={{width:"250px",height:"200px"}} src={all?.img1}/>
                    <div className='singleVedioParas'>
                       <h3 className='des'>Day in the life of a 4th year Medical Student | First day back</h3>   
                          <p className='titles'>Edurajo- Aj Aliga</p>
                          <p className='infos'>28M  views   3   days ago</p>
                    </div>

                </div>
          </Link>
            )
        })
       }
    </div>
  )
}

export default ReleatedVedios
