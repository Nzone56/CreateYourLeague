import { useContext, useEffect, useState } from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { StandingsTable } from './StandingsTable'
import { getUpdatedTeams } from '../../helpers/standings/getUpdatedTeams'

export const LeagueTable = () => {
   const { league } = useContext(LeagueContext)
   const [teams, setTeams] = useState(league.clubs)

   useEffect(() => {
      const updatedTeams = getUpdatedTeams(teams)
      const sortedTeams = [...updatedTeams].sort(
         (a, b) => a.position - b.position
      )

      setTeams(sortedTeams)
   }, [league.clubs])

   return (
      <Box
         sx={
            {
               //TODO: SELECT BACKGROUND IMAGE FOR STANDINGS TABLE
               // backgroundImage:
               //    'url(../../../src/assets/images/PremierLeague/PremierLeaguebg.png)',
               // backgroundSize: 'cover',
            }
         }
      >
         <Box
            mt={10}
            mb={10}
            sx={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column',
               width: '100%',
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: league.theme.tertiary,
               }}
            >
               <Typography
                  p={2}
                  sx={{
                     color: league.theme.Other2,
                  }}
               >
                  PREMIER
               </Typography>
               <CardMedia
                  component="img"
                  src={`../src/assets/images/leagues/${league.logo_url}`}
                  alt="League Logo"
                  height="50"
                  sx={{
                     maxWidth: '100%',
                     maxHeight: '100%',
                     objectFit: 'contain',
                  }}
               />
               <Typography
                  p={2}
                  sx={{
                     color: league.theme.Other2,
                  }}
               >
                  LEAGUE
               </Typography>
            </Box>

            <StandingsTable teams={teams} />
         </Box>
      </Box>
   )
}
