import React from 'react'
import "./HomeNavbar.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
// import IconButton from "@material-ui/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {AiOutlineMenu} from "react-icons/ai"
import { useAppContext } from '../context/appContext';
import {Link} from "react-router-dom"
import "./ChannelNavbar.css"
import {MdOutlineCreateNewFolder} from "react-icons/md"
import {IoIosNotificationsOutline, IoIosSad} from "react-icons/io"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';


const HomeNabar = () => {
  let {openBig,menu}=useAppContext()
  return (
    <div className='navChannel'>

      <div>
           <AiOutlineMenu style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>openBig()} className='navMenu'/>
      </div>

    

{/*  */}

       <div style={{display:"flex",width:"40%"}}>
       <TextField
       style={{width:"100%",height:"50px"}}
      label="Search..."
     InputProps={{
       endAdornment: (
        <InputAdornment>
            <SearchIcon>
            <SearchIcon />
          </SearchIcon>
         </InputAdornment>
           )
          }}
        />
        <div className='mike' style={{cursor:"pointer"}}>
           <KeyboardVoiceIcon fontSize='large'/>
        </div>
       </div>

{/*  */}

       <div style={{display:"flex"}}>
         <MdOutlineCreateNewFolder style={{fontSize:"36px",cursor:"pointer",marginRight:"20px"}}/>
         <IoIosSad style={{fontSize:"36px",cursor:"pointer",marginLeft:"20px"}}/>
         <Avatar style={{marginLeft:"20px"}}>N</Avatar>
       </div>


    

    </div>
  )
}

export default HomeNabar
