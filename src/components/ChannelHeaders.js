import React from 'react'
import "./ChannelHeaders.css"
import Pic from "../assets/images/music.jpg"
import { Button } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ChannelHeaders = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <div className='HeaderMain'>
      <img className='imageMusic' src={Pic}/>
{/*  */}

      <div style={{display:"flex",justifyContent:"space-between",padding:"0px 20px"}}>

         <div style={{display:"flex"}}>
            <img src={Pic} style={{width:"80px",height:"80px",borderRadius:"50%",marginRight:"10px"}}/>
            <div>
                <p className='dark' style={{fontSize:"26px",fontWeight:"bold",margin:"0px"}}>Music Library</p>
                <p className='light' style={{margin:"0px"}}>136K subscribers</p>
            </div>
         </div>
  
         <div>
            <Button  variant="contained" className='dark' style={{background:"red",marginTop:"30px"}} >SUBSCRIBE</Button>
         </div>

      </div>

      <div>
      <Box style={{marginTop:"20px",marginLeft:"26px"}} >
      <Tabs
       
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab  className="dark" style={{fontWeight:"500",fontFamily:"Roboto Flex', sans-serif"}} label="HOME" />
        <Tab  className="light" label="VIDEOS" style={{fontWeight:"500"}} />
        <Tab  className="light" style={{fontWeight:"500"}} label="PLAYLISTS" />
        <Tab  className="light" style={{fontWeight:"500"}} label="COMMUNITY" />
        <Tab  className="light" style={{fontWeight:"500"}} label="CHANNELS" />
        <Tab  className="light" style={{fontWeight:"500"}} label="ABOUT" />
      </Tabs>
    </Box>
      </div>


      {/*  */}
      <p className='dark'style={{marginLeft:"20px"}}>18 live Streams</p>
    </div>
  )
}

export default ChannelHeaders
