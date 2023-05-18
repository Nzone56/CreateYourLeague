import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { GenerateSchedule } from '../../helpers/schedules/generateSchedule'
import { MatchWeek } from './MatchWeek'

export const Schedules = () => {
   const { league } = useContext(LeagueContext)
   const teamsCode = league.clubs.map((club) => {
      return club.code
   })
   const schedule = GenerateSchedule({ teams: teamsCode })

   console.log(schedule)
   return (
      <Box
         mt={4}
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
         }}
      >
         <Box>
            <Typography>{league.competition} Fixtures</Typography>
         </Box>
         <Box
            mt={4}
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               flexDirection: 'column',
            }}
         >
            {schedule.map((matchweek, index) => (
               <MatchWeek matchweek={matchweek} index={index} key={index} />
            ))}
         </Box>
      </Box>
   )
}
