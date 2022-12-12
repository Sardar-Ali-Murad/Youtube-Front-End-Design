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


const HomeNabar = () => {
  let {openBig,menu}=useAppContext()
  return (
    <div className='navMain'>

      <div>
           <AiOutlineMenu style={{display:menu===true?"block":"none",fontSize:"27px",cursor:"pointer"}} onClick={()=>openBig()} className='navMenu'/>
      </div>

     <Link to="/">
      <div style={{display:"flex",marginTop:"20px"}}>
        <YouTubeIcon fontSize='large' className="Youtube"/>
        <h3 style={{marginLeft:"20px"}}>YouTube</h3>
      </div>
     </Link>

{/*  */}

       <div style={{display:"flex"}}>
       <TextField
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


      <div className='login' >
       <MoreVertIcon style={{marginTop:"8px",cursor:"pointer"}} fontSize="large"/>
       <Link to="/register">
       <Button className="loginButton" variant="outlined" startIcon={<PersonOutlineIcon/>}>
         Login
      </Button>
       </Link>
      </div>

    </div>
  )
}

export default HomeNabar
