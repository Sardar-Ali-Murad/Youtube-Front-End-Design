import React from 'react'
import man from "../assets/images/man.jpg"
import people from "../assets/images/people.webp"
import {arr9} from "../utils"
import "./HomeVedios.css"
import {Link} from "react-router-dom"

const HomeVedios = () => {
  return (
    <div className='allVediosMain'>
       {
        arr9.map((all)=>{
            return(
              <Link style={{color:"black"}} to="/singleVedio">
                <div className='single'>
                    <img className='bigImage' src={all?.img1}/>
                    

                    {/* <div className='des-image'> */}
                    <div style={{display:"flex"}}>
                      <Link to="/channel">
                        <img className='smallImage' src={all?.img2}/>
                      </Link>

                    <div style={{marginLeft:"7px"}}>
                       <h3 className='des'>Day in the life of a 4th year Medical Student | First day back</h3>   

                      <div className='lastPart'>
                          <p className='titles'>Edurajo- Aj Aliga</p>
                          <p className='info light'>28M  views   3   days ago</p>
                      </div>

                    </div>

                    </div>


                </div>
          </Link>
            )
        })
       }
    </div>
  )
}

export default HomeVedios
