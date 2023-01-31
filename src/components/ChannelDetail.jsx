import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos , ChannelCard} from './'
import { rapidAPI } from '../utils/rapidAPI'



const ChannelDetail = () => {

  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);


  useEffect(()=>{
    rapidAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));

    rapidAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items));
  })

  return (
    <Box minHeight='95vh'>
        <Box>
          <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,12,187,1) 49%, rgba(0,34,57,1) 100%)', zIndex:10, height:'250px'}}/>
          <ChannelCard channelDetail={channelDetail} marginTop="-92px"/>
        </Box>
        <Box display="flex" p="2" mt="4rem" sx={{justifyContent:"center" ,alignItems:'center'}}>
            <Videos  videos={videos} justifyContent='center'/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
