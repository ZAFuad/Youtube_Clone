import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {SideBar,Videos} from './'
import { rapidAPI} from '../utils/rapidAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    rapidAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items)});
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx:"column", md: "row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}>
        <SideBar sx={{position:'fixed'}} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography sx={{color:'white', opacity:'0.2', fontSize:'1rem'}}>
          made by ZAFuad
        </Typography>
      </Box>
      
      <Box ml={5} sx={{overflowY:'auto', height:'90vh', flex:2}}>
         <Typography variant='h4' fontWeight="bold" mb='2rem'  sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#F31503'}}>Videoes</span>
         </Typography>
      </Box>

      <Videos videos={videos} justifyContent="start"/>
    </Stack>
  )
}

export default Feed
