import { Box, Typography } from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useContext } from 'react'
export const TableHeaderTitle = ({ title }) => {
   const { league } = useContext(LeagueContext)
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
         }}
      >
         <Box
            sx={{
               backgroundColor: league.theme.secondary,
               width: '25%',
               height: '20px',
            }}
         />
         <Typography
            variant="h4"
            component="h4"
            sx={{
               color: league.theme.Other2,
               textAlign: 'center',
               backgroundColor: league.theme.secondary,
               padding: '15px 50px',
            }}
         >
            {title}
         </Typography>
         <Box
            sx={{
               backgroundColor: league.theme.secondary,
               width: '25%',
               height: '20px',
            }}
         />
      </Box>
   )
}
