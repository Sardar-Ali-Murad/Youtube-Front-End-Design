import React from 'react'
import {arr11} from "../utils"
import {SlLike} from "react-icons/sl"
import {SlDislike} from "react-icons/sl"
import "./Comments.css"
import {AiFillCaretDown} from "react-icons/ai"
import {MdOutlineSort} from "react-icons/md"
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

const Comments = () => {
  return <div>

    <div className='ChangingPartInComments'>
       <div  style={{display:"flex"}}>
         <p className='dark' style={{fontSize:"16px",marginRight:"30px"}}>172 Comments</p>
         <MdOutlineSort style={{fontSize:"29px",marginTop:"13px",marginRight:"10px"}}/>
         <p className="dark">SORT BY</p>
      </div>
      
      <div   style={{width:"100%",display:"flex"}}>
      <Avatar src="/broken-image.jpg" style={{marginTop:"20px",marginRight:"10px"}} />
      <TextField style={{width:"80%"}} id="standard-basic" label="Add a comment..." variant="standard" />
      </div>
    </div>


     {
         arr11.map((all)=>{
            return(

                <div style={{display:"flex",marginBottom:"30px",marginTop:"30px"}}>

                <div style={{marginRight:"30px"}}>
                   <img src={all?.image} style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
                </div>

                <div className='MainCommentsPart'>
                <p className='dark'>{all?.name}<span className='light'>{all?.time}</span></p>
                <p className='dark' style={{margin:"7px"}}>{all?.comment}</p>
                <div style={{display:"flex",alignItems:"center"}}>
                    <SlLike style={{marginRight:"15px"}}/>
                    <p className='light' style={{marginRight:"15px",marginTop:"20px"}}>{all?.like}</p>
                    <SlDislike style={{marginRight:"15px"}}/>
                    <p className='light' style={{marginRight:"15px",marginTop:"18px"}}>REPLY</p>
                </div>

                <div  style={{color:"blue",display:"flex"}}>
                    <AiFillCaretDown style={{marginTop:"4px",marginRight:"10px"}}/>
                   <p className='dark'>30 REPLY</p>
                </div>


                </div>

            </div>
            )
        }
        )
    }
    
    </div>   
}

export default Comments
