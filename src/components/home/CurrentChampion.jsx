import { Box, Typography } from '@mui/material'
import { ClubCell } from '../leagueTable/ClubCell'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useContext } from 'react'

export const CurrentChampion = () => {
   const { league } = useContext(LeagueContext)
   return (
      <Box
         mt={8}
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <Typography
            variant="h5"
            component="h5"
            sx={{
               color: league.theme.secondary,
               textAlign: 'center',

               marginRight: '10px',
            }}
         >
            CURRENT CHAMPION:
         </Typography>
         <ClubCell clubName={league.current_champion} />
      </Box>
   )
}
