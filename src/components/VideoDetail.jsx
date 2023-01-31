import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle , RemoveRedEye, ThumbUpAlt} from '@mui/icons-material'
import { rapidAPI } from '../utils/rapidAPI'
import Videos from './Videos'


const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    rapidAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]));

    rapidAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setVideos(data.items));

  },[id]);

  if(!videoDetail?.snippet) return 'Loading...'; 

  const {snippet: {title, channelId, channelTitle }, statistics:{viewCount, likeCount}} = videoDetail;

  return (
    <Box minHeight='95vh '>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'5rem'}}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography variant='h5' fontWeight='bold' color='white' p={3}>
            {title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' color='white' py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm: 'subtitle1', md:'h6'}} color='white' marginLeft={1}>
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'10px'}}/>
              </Typography>
            </Link>

            <Stack direction={'row'} gap='20px' alignItems={'center'}>
              
              <Typography variant='body1' sx={{opacity:'0.7'}}>
              <RemoveRedEye px='3px' py='2px' fontSize='12px'/> {parseInt(viewCount).toLocaleString()} views
              </Typography>

              <Typography variant='body1' sx={{opacity:'0.7'}}>
                <ThumbUpAlt px='3px' py='2px' fontSize='12px'/> {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>

            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
