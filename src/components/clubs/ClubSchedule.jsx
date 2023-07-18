import { useContext } from 'react'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'
import { Box, Typography } from '@mui/material'
import { Match } from '../schedule/Match'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { getClubSchedules } from '../../helpers/schedules/getClubSchedules'

export const ClubSchedule = ({ club, isPlayed }) => {
   const { schedules } = useContext(ScheduleContext)
   const { league } = useContext(LeagueContext)
   const clubSchedules = getClubSchedules(schedules, club, isPlayed)

   return (
      <Box>
         {clubSchedules.length === 0 ? (
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
               }}
            >
               <Typography
                  m={2}
                  sx={{ textAlign: 'center' }}
                  component="h2"
                  variant="h2"
               >
                  No matches found
               </Typography>
            </Box>
         ) : (
            <Typography
               component="ul"
               sx={{ listStyleType: 'none', paddingInlineStart: '0' }}
               m={4}
            >
               {clubSchedules?.map((data) => (
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                     }}
                     mx={16}
                     key={data.match[0] + data.match[3]}
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
               ))}
            </Typography>
         )}
      </Box>
   )
}
