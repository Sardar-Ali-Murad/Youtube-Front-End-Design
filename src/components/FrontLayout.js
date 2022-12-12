import React from 'react'
import "./FrontLayout.css"
import {arr10} from "../utils"
import pic from "../assets/images/century.jpg"
import Button from '@mui/material/Button';
import {AiOutlineArrowRight} from "react-icons/ai"
import {MdOutlineSort} from "react-icons/md"
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

const FrontLayout = () => {
  return (
    <div className="FrontLayoutMain">
{/*  */}
                    <iframe
                      width="90%"
                      height="500px"
                      src="https://www.youtube.com/embed/eSIJddEieLI? 
                      autoplay=1&mute=1"
                      title="YouTube video player"
                      frameborder="0"
                    ></iframe>
{/*  */}
            <div className="VedioInfoPart">
                <div style={{marginBottom:"40px",marginTop:"30px"}}>
                    <p className='layoutTitle'> Paper Towns | Margo [HD] | 20th Century FOX </p>
                    <p className='frontLayoutDes'><span>673,398 views  Jul 2, 2015 </span> We could all use more Margo. Watch John Green,  Cara Delevingne and Nat Wolff tal …more</p>
                </div>  
                    <div style={{display:"flex",marginRight:"20px",marginBottom:"40px"}}>
                       {
                        arr10.map((all)=>{
                            return <div className='actionIcons' style={{display:"flex",textAlign:"center"}}>
                                <div>{all?.icon}</div>
                                <p style={{marginTop:"10px"}}> {all?.text}</p>
                            </div>
                        })
                       }
                    </div>
             </div>
{/*  */}
 
        <div className="boxes">

            <div className='channelInfo'>
              <img src={pic} style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
              <div className="channelSmallInfo">
                <p className="dark">20th Century Studio</p>
                <p className='light'>4.2M subscribers</p>
              </div>
              <Button style={{zIndex:"-2"}} variant="contained" className='dark' color="error">SUBSCRIBE</Button>
            </div>

            <div className='CommentInfoBox'>
               <div className='commentsInfo'>
                 <p className='dark'>Comments</p>
                 <p className="light">172</p>
               </div>

               <div className='addComment'>
                  <p className='light'>Add a comment...</p>
                  <AiOutlineArrowRight style={{fontSize:"16px"}}/>
               </div>

            </div>

        </div>


{/*  */}


      <div className='ChangingPart' >
         <p className='dark' style={{fontSize:"16px",marginRight:"30px"}}>172 Comments</p>
         <MdOutlineSort style={{fontSize:"29px",marginTop:"13px",marginRight:"10px"}}/>
         <p className="dark">SORT BY</p>
      </div>
      
      <div className='ChangingPart'  style={{width:"100%"}}>
      <Avatar src="/broken-image.jpg" style={{marginTop:"20px",marginRight:"10px"}} />
      <TextField style={{width:"80%"}} id="standard-basic" label="Add a comment..." variant="standard" />
      </div>

{/*  */}
    </div>
  )
}

export default FrontLayout
