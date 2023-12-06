
import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = (themes) => {
  return (
    <Box flex={4} sx={{padding:"10px 20px"}} >
     <Post/>
     <Post/>
     <Post/>
    </Box>
  )
}

export default Feed
