import { Box, Typography } from '@mui/material'
import React from 'react'

export const ClubInfo = ({ club }) => {
   console.log(club)
   return (
      <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
         <Box sx={{ position: 'relative', width: '100%' }}>
            <img
               src={`../../../src/assets/images/PremierLeague/${club.name}/stadium.png`}
               alt={club.short_name}
               width="100%"
               height="300px"
               key={club.id}
               style={{ opacity: 0.5 }}
            />
            <Typography
               sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
               }}
            >
               {club.name}
            </Typography>
         </Box>
         <Box sx={{ display: 'flex', width: '100%' }}></Box>
      </Box>
   )
}
