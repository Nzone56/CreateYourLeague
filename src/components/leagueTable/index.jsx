import { useContext, useEffect, useState } from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { StandingsTable } from './StandingsTable'
import { getUpdatedTeams } from '../../helpers/standings/getUpdatedTeams'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'
import { createRows } from '../../helpers/standings/dataToTable'

export const LeagueTable = () => {
   const { league } = useContext(LeagueContext)
   const { schedules } = useContext(ScheduleContext)
   const [teams, setTeams] = useState(league.clubs)
   useEffect(() => {
      const updatedTeams = getUpdatedTeams(teams, schedules)
      const sortedTeams = [...updatedTeams].sort(
         (a, b) => a.position - b.position
      )
      setTeams(sortedTeams)
   }, [league.clubs])

   return (
      <Box>
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
                  alignItems: 'center',
                  backgroundColor: league.theme.secondary,
                  color: league.theme.secondary,
               }}
            >
               <Box m={1}>
                  <img
                     src={`/assets/images/leagues/${league.logo_url}`}
                     alt="League Logo"
                     style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        height: '50px',
                        width: '50px',
                        padding: '0px 75px',
                        filter:
                           league.name === 'PremierLeague'
                              ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(131deg) brightness(102%) contrast(101%)'
                              : 'none',
                     }}
                  />
               </Box>
            </Box>

            <StandingsTable teams={teams} createRows={createRows} />
         </Box>
      </Box>
   )
}
