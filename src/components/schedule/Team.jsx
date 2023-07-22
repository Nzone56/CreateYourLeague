import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
export const Team = ({ club, reverseOrder }) => {
   const { league } = useContext(LeagueContext)
   return (
      <>
         {reverseOrder ? (
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '23%',
               }}
            >
               <Typography
                  variant="h6"
                  component="h6"
                  mr={1}
                  sx={{ fontSize: '18px' }}
               >
                  {club.short_name}
               </Typography>
               <img
                  src={`/assets/images/${league.name}/${club.name}/logo.svg`}
                  alt={club.short_name}
                  width="25"
                  height="25"
               />
            </Box>
         ) : (
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '23%',
               }}
            >
               <img
                  src={`/assets/images/${league.name}/${club.name}/logo.svg`}
                  alt={club.short_name}
                  width="25"
                  height="25"
               />
               <Typography
                  variant="h6"
                  component="h6"
                  ml={1}
                  sx={{ fontSize: '18px' }}
               >
                  {club.short_name}
               </Typography>
            </Box>
         )}
      </>
   )
}
