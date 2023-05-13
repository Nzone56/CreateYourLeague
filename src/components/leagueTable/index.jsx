import { useContext, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { StandingsTable } from './StandingsTable'

export const LeagueTable = () => {
   const { league } = useContext(LeagueContext)
   const [teams, setTeams] = useState(league.clubs)

   useEffect(() => {
      setTeams(league.clubs)
   }, [league])

   return (
      <Box
         mt={10}
         mb={10}
         sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            maxWidth: '100vw',
         }}
      >
         <Typography
            p={2}
            sx={{
               backgroundColor: league.theme.secondary,
               color: league.theme.Other2,
            }}
         >
            -- LEAGUE TABLE --
         </Typography>
         <StandingsTable teams={teams} />
      </Box>
   )
}
