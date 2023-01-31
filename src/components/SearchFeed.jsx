import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import {SideBar, Videos} from './'
import { rapidAPI} from '../utils/rapidAPI'

const SearchFeed = () => {

  const [videos,setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(()=>{
    rapidAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items)});
  },[searchTerm]);

 

  return (
    <Stack sx={{flexDirection: {sx:"column", md: "row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}>
        <SideBar selectedCategory={''} setSelectedCategory={' '}/>
        <Typography sx={{color:'white', opacity:'0.2', fontSize:'1rem'}}>
          made by ZAFuad
        </Typography>
      </Box>
      
      <Box ml={5} sx={{overflowY:'auto', height:'90vh', flex:2}}>
         <Typography variant='h4' fontWeight="bold" mb='2rem'  sx={{color:'white'}}>
          Search Results for: <span style={{color:'#F31503'}}>{searchTerm}</span> Videos
         </Typography>
         <Videos videos={videos} justifyContent="start"/>
      </Box>
    </Stack>
  )
}

export default SearchFeed



