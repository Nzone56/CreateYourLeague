import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const MatchWeek = ({ matchweek, index }) => {
   return (
      <Box mt={2}>
         <Typography> MatchWeek {index + 1}</Typography>
         {matchweek.map((match) => (
            <Grid container>
               <Grid item>
                  {match[0]} 0 - 0 {match[1]}
               </Grid>
            </Grid>
         ))}
      </Box>
   )
}
