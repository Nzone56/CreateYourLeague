import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { GenerateSchedule } from '../../helpers/schedules/generateSchedule'
import { MatchWeek } from './MatchWeek'

export const Schedule = () => {
   const { league } = useContext(LeagueContext)
   const teamsCode = league.clubs.map((club) => {
      return club.code
   })
   const schedules = GenerateSchedule({ teams: teamsCode })

   console.log(schedules)
   return (
      <Box
         margin={6}
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
         }}
      >
         <Box>
            <Typography
               variant="h4"
               component="h4"
               sx={{
                  color: `${league.theme.secondary}`,
                  fontWeight: 'bold',
                  fontSize: '40px',
               }}
            >
               {league.competition.toUpperCase() + ' FIXTURES'}
            </Typography>
         </Box>
         <Box
            margin={8}
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               flexDirection: 'column',
               width: '100%',
            }}
         >
            {schedules.map((matchweek, index) => (
               <MatchWeek
                  matchweek={matchweek}
                  index={index}
                  key={index}
                  theme={league.theme}
               />
            ))}
         </Box>
      </Box>
   )
}
