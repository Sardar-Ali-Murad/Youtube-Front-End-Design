import React from 'react'
import "./Subscription.css"
import {array} from "../utils2"
import {Link} from "react-router-dom"

const SubscriptionBody = () => {
  return (
    <div style={{padding:"20px"}}>
        {/*  */}

        <div>
      <p className='dark' style={{fontWeight:"bold"}}>Today</p>
      <div className='grid'>
      {
          array.slice(0,3).map((all)=>{
              return(
                <Link to="/singleVedio">
                  <div style={{marginBottom:"30px"}}>

                 <img src={all?.image}/>
                 <p className='dark' style={{color:"black"}}>{all?.title}</p>
                 <p className='light' style={{margin:"0px",marginBottom:"10px"}}>{all?.channel}</p>
                 <p className='light' style={{margin:"0px"}}>{all?.view}</p>
            </div>
                </Link>
        )
        })
    }
    </div>
    </div>
    <div className='line'></div>

{/*  */}
        {/*  */}

        <div>
      <p className='dark' style={{fontWeight:"bold"}}>Yesterday</p>
      <div className='grid'>
      {
          array.slice(0,5).map((all)=>{
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
    </div>
    <div className='line'></div>

{/*  */}
        {/*  */}

        <div>
      <p className='dark' style={{fontWeight:"bold"}}>This Week</p>
      <div className='grid'>
      {
          array.slice(0,7).map((all)=>{
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
    </div>
    <div className='line'></div>

{/*  */}
        {/*  */}

        <div>
      <p className='dark' style={{fontWeight:"bold"}}>Older</p>
      <div className='grid'>
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
    </div>
    <div className='line'></div>

{/*  */}
    </div>
  )
}

export default SubscriptionBody
