import React from 'react'
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {arr8} from "../utils"
import "./Scroll.css"
import Chip from '@mui/material/Chip';



const Scroll = () => {
     
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <div className='scrollMain'>
       <Box
      sx={{
          flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480 },
        bgcolor: 'background.paper',
    }}
    >
      <Tabs
        className="scroll"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        
        {
            arr8.map((all)=>{
                return    (
                  // <Tab label={all} />
                  <div style={{marginLeft:"10px",marginTop:"7px",cursor:"pointer"}}>
                  <Chip style={{cursor:"pointer",background:"lightgrey",border:".1px grey"}} label={all} variant="outlined" />
                  </div>
                  )
            })
        }
      </Tabs>
    </Box>
    </div>
  )
}

export default Scroll
