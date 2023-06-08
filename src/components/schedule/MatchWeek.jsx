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

   const addPoints = () => {
      league.clubs[1].seasonData.points++
      // league.clubs[0].position = 21
   }

   return !matchweekId ? (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
         }}
      >
         {/* TODO: Put some shit here */}
         <Typography>smth will be here, but idk what tbh </Typography>
         <Typography component="ul">IDEAS: </Typography>
         <li> Re gen scehdules button </li>
         <li> Some info/preview maybe </li>
         <li> Open to ideas </li>
         <Button onClick={addPoints}> Add Arsenal a point</Button>
      </Box>
   ) : (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            // TODO: SELECT BG IMAGE FOR SCHEDULE
            // backgroundImage:
            //    'url(../../../src/assets/images/PremierLeague/bgWhite.png)',
            // backgroundSize: 'cover',
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
