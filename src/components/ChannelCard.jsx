import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, CardContent, CardMedia,Box} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({channelDetail,marginTop}) => (
   
   <Box sx={{boxShadow:'none', borderRadius:'20px', display:'flex', justifyContent:'center', alignItems:'center',width:{xs:'360px', sm:'360px', md:'320px'},height:'326',margin:'auto',marginTop:marginTop}}>
      <Link to = {`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{color:'white', display:'flex', flexDirection:'column',
        justifyContent:'center',textAlign:'center'}}>

        <CardMedia sx={{width:"180px", height: '180px', borderRadius:'50%', mb:2, border:'1px solid #e3e3e3'}}
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
        alt={channelDetail?.snippet?.title}/>
          <Typography variant='h6' color="white">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 12 , color: 'gray', ml: '5px'}}/>
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )

          }
        </CardContent> 
      </Link>

   </Box>
)


export default ChannelCard
