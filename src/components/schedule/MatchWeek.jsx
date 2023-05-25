import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Typography,
} from '@mui/material'
import { Match } from './Match'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'

export const MatchWeek = () => {
   const { league } = useContext(LeagueContext)
   const { schedules } = useContext(ScheduleContext)
   const theme = league.theme
   const { id } = useParams()
   const schedule = schedules[id - 1]

   return !id ? (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
         }}
      >
         <Typography>smth will be here, but idk what tbh </Typography>
         <Typography component="ul">IDEAS: </Typography>
         <li> Re gen scehdules button </li>
         <li> Some info/preview maybe </li>
         <li> Open to ideas </li>
      </Box>
   ) : (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
         }}
         m={4}
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
            MatchWeek #{id}
         </Typography>
         <Typography
            component="ul"
            sx={{ listStyleType: 'none', paddingInlineStart: '0' }}
         >
            {schedule?.map((match) => {
               return (
                  <Match
                     match={match}
                     theme={theme}
                     key={match[0] + match[1]}
                  />
               )
            })}
         </Typography>
      </Box>
   )
}
