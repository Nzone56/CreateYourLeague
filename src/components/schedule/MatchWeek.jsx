import { Box, Button, Typography } from '@mui/material'
import { Match } from './Match'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'

export const MatchWeek = () => {
   const { league } = useContext(LeagueContext)
   const { schedules } = useContext(ScheduleContext)
   const theme = league.theme
   const { id: matchweekId } = useParams()
   const schedule = schedules[matchweekId - 1]

   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
         }}
         m={4}
         mt={0}
      >
         <Typography
            align="center"
            sx={{
               color: `${theme.Other2}`,
               fontSize: '20px',
               fontWeight: 'bold',
               backgroundColor: theme.secondary,
            }}
         >
            MatchWeek #{matchweekId}
         </Typography>
         <Typography
            component="ul"
            sx={{ listStyleType: 'none', paddingInlineStart: '0' }}
         >
            {schedule?.map((match, index) => {
               return (
                  <Match
                     match={match}
                     theme={theme}
                     key={match[0] + match[3]}
                     matchId={index}
                     matchweekId={matchweekId - 1}
                  />
               )
            })}
         </Typography>
      </Box>
   )
}
