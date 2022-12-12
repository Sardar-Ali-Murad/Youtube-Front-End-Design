import HomeIcon from '@mui/icons-material/Home';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {SiYoutubestudio} from "react-icons/si"
import {FaDog, FaYoutubeSquare} from "react-icons/fa"
import {SiYoutubemusic} from "react-icons/si"

import {AiFillSetting} from "react-icons/ai"
import {AiOutlineFlag} from "react-icons/ai"
import {BiHelpCircle} from "react-icons/bi"
import {MdOutlineFeedback} from "react-icons/md"

import man from "./assets/images/man.jpg"
import people from "./assets/images/people.webp"

import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"
import {RiShareForwardLine} from "react-icons/ri"
import {RiMenuAddLine} from "react-icons/ri"

import dog from "./assets/images/dog.jpg"
import pop from "./assets/images/pop.webp"

import music2 from "./assets/images/song2.jpg"

import song3 from "./assets/images/music3.webp"

import blog from "./assets/images/blog.jpg"
import boys from "./assets/images/boys.webp"
import competetion from "./assets/images/compe.png"
import dc from "./assets/images/dc.jpg"
import disney from "./assets/images/disney.webp"
import avengers from "./assets/images/avengers.jpg"
import scrimba from "./assets/images/scrimba.webp"
import { Popover } from '@mui/material';
import { DiningSharp, ScreenshotMonitorRounded } from '@mui/icons-material';
import { PopperUnstyled } from '@mui/base';

let arr=[
    {
        text:"Home",
        icon:<HomeIcon/>,
        link:"/"
    },
    {
        text:"Shorts",
        icon:<ShortTextIcon/>,
        link:"/"
    },
    {
        text:"Subscriptions",
        icon:<SubscriptionsIcon/>,
        link:"/subscription"
    },
    {
        text:"Library",
        icon:<VideoLibraryIcon/>,
        link:"/library"
    },
    {
        text:"History",
        icon:<HistoryIcon/>,
        link:"/history"
    }
]


let arr2=[
    {
        text:"Home",
        icon:<HomeIcon/>,
        link:"/"
    },
    {
        text:"Shorts",
        icon:<ShortTextIcon/>,
        link:"/"
    },
    {
        text:"Subscriptions",
        icon:<SubscriptionsIcon/>,
        link:"/subscription"
    },
]

let arr3=[
    {
        text:"Library",
        icon:<VideoLibraryIcon/>,
        link:"/library"
    },
    {
        text:"History",
        icon:<HistoryIcon/>,
        link:"/history"
    }
]


let arr4=[
    {
        text:"Music",
        icon:<AudiotrackIcon style={{fontSize:"26px"}}/>
    },
    {
        text:"Gamming",
        icon:<SportsEsportsIcon style={{fontSize:"26px"}}/>
    },
    {
        text:"News",
        icon:<NewspaperIcon style={{fontSize:"26px"}}/>
    },
    {
        text:"Sports",
        icon:<EmojiEventsIcon style={{fontSize:"26px"}}/>
    }
]


let arr5=[
    {
        text:"Browse",
        icon:<AddCircleOutlineIcon style={{fontSize:"26px"}}/>
    }
]


let arr6=[
    {
        text:"Youtube Music",
        icon:<SiYoutubemusic style={{color:"red",fontSize:"26px"}}/>
    },
    {
        text:"Youtube Kid",
        icon:<SiYoutubestudio style={{color:"red",fontSize:"26px"}}/>
    },
    {
        text:"Youtube TV",
        icon:<FaYoutubeSquare style={{color:"red",fontSize:"26px"}}/>
    },

]


let arr7=[
    {
        text:"Settings",
        icon:<AiFillSetting style={{fontSize:"26px"}} />
    },
    {
        text:"Report history",
        icon:<AiOutlineFlag style={{fontSize:"26px"}}/>
    },
    {
        text:"help",
        icon:<BiHelpCircle style={{fontSize:"26px"}}/>
    },
    {
        text:"Send FeedBack",
        icon:<MdOutlineFeedback style={{fontSize:"26px"}}/>
    },

]


let arr8=["All","Gamming","Live","Mixes","Music","Wall-E","Traliers","Scene","Playlist","Pop Rock","University","Indie Rock","folk Rock","Animated Films","Humans","Recently Upoloaded","Watched"]


let arr9=[
    {
      img1:people,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
      img1:pop,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
        img1:song3,
      img2:song3,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
      img1:blog,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
      img1:boys,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
      img1:competetion,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
        img1:avengers,
        img2:man,
        des:"Day in the life of a 4th year Medical Student | First day back",
        title:"Edurajo- Aj Aliga",
        info:"28M views *3 days ago"
    },
    {
      img1:scrimba,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
      img1:disney,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
    {
        img1:dog,
        img2:man,
        des:"Day in the life of a 4th year Medical Student | First day back",
        title:"Edurajo- Aj Aliga",
        info:"28M views *3 days ago"
    },
    {
        img1:people,
        img2:man,
        des:"Day in the life of a 4th year Medical Student | First day back",
        title:"Edurajo- Aj Aliga",
        info:"28M views *3 days ago"
    },
    {
        img1:music2,
        img2:man,
        des:"Day in the life of a 4th year Medical Student | First day back",
        title:"Edurajo- Aj Aliga",
        info:"28M views *3 days ago"
    },
    {
      img1:dc,
      img2:man,
      des:"Day in the life of a 4th year Medical Student | First day back",
      title:"Edurajo- Aj Aliga",
      info:"28M views *3 days ago"
    },
]


let arr10=[
    {
        text:"7K",
        icon:<BiLike style={{fontSize:"30px",marginTop:"10px",marginRight:"9px"}}/>
    },
    {
        text:"Dislike",
        icon:<BiDislike style={{fontSize:"30px",marginTop:"10px",marginRight:"9px"}}/>
    },
    {
        text:"Share",
        icon: <RiShareForwardLine style={{fontSize:"30px",marginTop:"10px",marginRight:"9px"}}/>
    },
    {
        text:"Save",
        icon:<RiMenuAddLine style={{fontSize:"30px",marginTop:"10px",marginRight:"9px"}}/>
    }

]

let arr11=[
    {
        image:dog,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:people,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:boys,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:avengers,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:scrimba,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:pop,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:music2,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:song3,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:disney,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
    {
        image:dog,
        name:"Brian Anthony ",
        time:"2 weeks ago",
        comment:"FINALLY we are getting a season 2. It felt like forever just waiting on the teaser alone. Loved the first season and definitely will be binge watching the second.",
        like:"3k",
        reply:"30 REPLIES"
    },
]

let arr12=[
    {
        image:pop,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:scrimba,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:avengers,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:dog,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:boys,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:music2,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:people,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:competetion,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:disney,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },
    {
        image:blog,
        title:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia",
        info:"Music Library• 879 watching",
        des:"Billboard hot 50 This Week - ADELE, Maroon 5, Bilie Eilish, Taylor Swift, Sam Smith, Rihanna, Sia ▽ Follow Channel: ©Music Library → https://bit.ly/3NwkCwn ► ►"
    },

]

let arr13=[
    {
        image:music2,
        title:"Deep House Radio | 24/7 Livestream",
        info:"200 watching"
    },
    {
        image:PopperUnstyled,
        title:"Deep House Radio | 24/7 Livestream",
        info:"200 watching"
    },
    {
        image:avengers,
        title:"Deep House Radio | 24/7 Livestream",
        info:"200 watching"
    },
]

let arr14=[
    {
        image:disney,
        title:"Future House Radio | 24/7 Livestream",
        subtitle:"Paranova",
        info:"3.6K views . Streamed 6 years ago"
    },
    {
        image:song3,
        title:"Future House Radio | 24/7 Livestream",
        subtitle:"Paranova",
        info:"3.6K views . Streamed 6 years ago"
    },
]

let arr15=[
    {
        image:people,
        name:"Sensual Blossom",
        views:"10M  subscribers",
    },
    {
        image:dog,
        name:"Sensual Blossom",
        views:"10M  subscribers",
    },
    {
        image:boys,
        name:"Sensual Blossom",
        views:"10M  subscribers",
    },

]

export {arr,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10,arr11,arr12,arr13,arr14,arr15}