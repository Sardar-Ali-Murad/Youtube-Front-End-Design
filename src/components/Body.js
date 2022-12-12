import React from 'react'
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {arr8} from "../utils"
import "./Body.css"
import Scroll from './Scroll';
import HomeVedios from "./HomeVedios"


const Body = () => {
    return(
        <div>
        <Scroll/>
        <HomeVedios/>
        </div>
    )
}

export default Body
