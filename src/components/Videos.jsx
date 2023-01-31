import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard,ChannelCard} from './'

const Videos = ({videos, justifyContent,direction}) => {
if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent={justifyContent} alignItems="center" gap={3}>
         {videos.map((item,ind)=>(
            <Box key={ind}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
         ))}
    </Stack>
  )
}

export default Videos
