import { Box } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { ChampionsTable } from './ChampionsTable'
import { Title } from './Title'
import { StandingsPrev } from './StandingsPrev'
import { TableHeaderTitle } from './TableHeaderTitle'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'
import { getUpdatedTeams } from '../../helpers/standings/getUpdatedTeams'

export const LeagueHome = () => {
   const { league } = useContext(LeagueContext)
   const { schedules } = useContext(ScheduleContext)
   const [teams, setTeams] = useState(league.clubs)

   useEffect(() => {
      if (schedules.length > 0) {
         const updatedTeams = getUpdatedTeams(teams, schedules)
         const sortedTeams = [...updatedTeams].sort(
            (a, b) => a.position - b.position
         )
         setTeams(sortedTeams)
      }
   }, [league.clubs])

   return (
      <Box
         sx={{
            width: '100%',
            background: `${league.theme.Other2}`,
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <Title />
         <Box
            sx={{
               width: '100%',
               display: 'flex',
            }}
         >
            <Box
               m={8}
               sx={{
                  width: '50%',
               }}
            >
               <TableHeaderTitle title={'CURRENT TABLE'} />
               <StandingsPrev teams={teams} />
            </Box>

            <Box
               m={8}
               sx={{
                  width: '50%',
               }}
            >
               <TableHeaderTitle title={'HISTORIC TABLE'} />
               <ChampionsTable />
            </Box>
         </Box>
      </Box>
   )
}
