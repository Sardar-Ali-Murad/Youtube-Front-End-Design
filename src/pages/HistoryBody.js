import React from 'react'
import {array2} from "../utils2"
import "./HistoryBody.css"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import {RiDeleteBin6Line} from "react-icons/ri"
import {AiOutlinePauseCircle} from "react-icons/ri"
import {BsBoundingBoxCircles} from "react-icons/bi"
import Chip from '@mui/material/Chip';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Link } from 'react-router-dom';

const HistoryBody = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
  return (
    <div style={{padding:"20px"}} className="HistoryMain">

        {/*  */}

        <div className='HistoryOne'>


        <div>

      <p className='dark' style={{fontWeight:"bold",fontSize:"26px"}}>Watch Later</p>
      <p className='dark' style={{fontWeight:"bold"}}>Today</p>
      {
          array2.slice(0,2).map((all)=>{
            return(
                <Link to="/singleVedio">
                <div  className="historySingle">
                <img src={all?.image} style={{width:"300px",height:"200px"}}/>
                <div className='historyInfomation'>
                  <p className='dark' style={{margin:"0px",color:"black",marginBottom:"20px"}} >{all?.title}</p>
                  <p className='light' style={{margin:"0px"}}>{all?.info}</p>
                  <p className='light'>{all?.des}</p>
                </div>
            </div>
                </Link>
                 )
        })
      }
        </div>

        {/*  */}
        <p className='dark' style={{fontWeight:"bold",fontSize:"26px"}}>Monday</p>
      {
          array2.slice(0,3).map((all)=>{
              return(
                <Link to="/singleVedio">
                  <div className="historySingle">
                <img src={all?.image} style={{width:"300px",height:"200px"}}/>
                <div className='historyInfomation'>
                  <p className='dark' style={{margin:"0px",color:"black",marginBottom:"20px"}}>{all?.title}</p>
                  <p className='light' style={{margin:"0px"}}>{all?.info}</p>
                  <p className='light'>{all?.des}</p>
                </div>
            </div>
                </Link>
                  ) 
        })
    }

      {/*  */}
        <p className='dark' style={{fontWeight:"bold",fontSize:"26px"}}>25 December,2022</p>
      {
        array2.slice(0,1).map((all)=>{
            return(
                <Link to="/singleVedio">
                <div className="historySingle">
                <img src={all?.image} style={{width:"300px",height:"200px"}}/>
                <div  className='historyInfomation'>
                  <p className='dark' style={{margin:"0px",color:"black",marginBottom:"20px"}}>{all?.title}</p>
                  <p className='light' style={{margin:"0px"}}>{all?.info}</p>
                  <p className='light'>{all?.des}</p>
                </div>
            </div>
                </Link>
                ) 
        })
    }
      {/*  */}
        <p className='dark' style={{fontWeight:"bold",fontSize:"26px"}}>Later</p>
      {
          array2.slice(0,4).map((all)=>{
              return(
                <Link to="/singleVedio">
                  <div className="historySingle" >
                  <img src={all?.image} style={{width:"300px",height:"200px"}}/>
                <div  className='historyInfomation'>
                    <p className='dark' style={{margin:"0px",color:"black",marginBottom:"20px"}}>{all?.title}</p>
                  <p className='light' style={{margin:"0px"}}>{all?.info}</p>
                  <p className='light'>{all?.des}</p>
                </div>
            </div>
                </Link>
                  ) 
        })
    }
    </div>

      {/*  */}

        <div className='HistoryTwo'>
        <TextField style={{width:"80%",marginBottom:"50px"}} id="standard-basic" label="Search watch history" variant="standard" />

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <p className='dark' style={{margin:"0px"}}>History Type</p>
        <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
        </div>

        <div className='line'></div>

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <p className='dark' style={{margin:"0px"}}>Watch history</p>
        <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
        </div>

        <div className='line'></div>
        <p className='dark'>Community</p>

        <div>
        <Chip  style={{width:"60%",marginBottom:"30px"}} icon={<RiDeleteBin6Line fontSize="large" />} label="Clear all watch history" variant="outlined" />
        <Chip style={{width:"60%",marginBottom:"30px"}} icon={<PauseCircleOutlineIcon fontSize="large" />} label="Pause watch history" variant="outlined" />
        <Chip style={{width:"60%",marginBottom:"30px"}} icon={<ManageSearchIcon fontSize="large" />} label="Manage all history" variant="outlined" />
        </div>

        <div style={{marginLeft:"40px"}}>
            <p className='light' style={{fontWeight:"bold"}}>Watch and search history</p>
            <p className='light' style={{fontWeight:"bold"}}>Comments</p>
            <p className='light' style={{fontWeight:"bold"}}>Live chat</p>
        </div>

        <div>

        </div>

        </div>


    </div>
  )
}

export default HistoryBody
