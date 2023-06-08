import { useContext } from 'react'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'
import { Box, Typography } from '@mui/material'
import { Match } from '../schedule/Match'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const ClubFixtures = ({ club }) => {
   const { schedules } = useContext(ScheduleContext)
   const { league } = useContext(LeagueContext)
   const clubSchedules = schedules.map((matchweek, matchweekIndex) => {
      const foundMatch = matchweek.reduce((found, match, matchIndex) => {
         if (!found && (match[0] === club.code || match[3] === club.code)) {
            return {
               match,
               matchweekIndex,
               matchIndex,
            }
         }
         return found
      }, null)

      return foundMatch
   })
   return (
      <Typography
         component="ul"
         sx={{ listStyleType: 'none', paddingInlineStart: '0' }}
         m={4}
      >
         {clubSchedules?.map((data) => {
            return (
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     flexDirection: 'column',
                  }}
                  mx={16}
               >
                  <Typography
                     sx={{ fontWeight: 'bold', fontSize: '22px' }}
                     my={2}
                  >
                     MatchWeek #{data.matchweekIndex + 1}
                  </Typography>
                  <Match
                     match={data.match}
                     theme={league.theme}
                     key={data.match[0] + data.match[3]}
                     matchId={data.matchIndex}
                     matchweekId={data.matchweekIndex}
                  />
               </Box>
            )
         })}
      </Typography>
   )
}
