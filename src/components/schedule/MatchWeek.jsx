import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Typography,
} from '@mui/material'
import { Match } from './Match'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'

export const MatchWeek = () => {
   const { league } = useContext(LeagueContext)
   const { schedules } = useContext(ScheduleContext)
   const theme = league.theme
   const { id } = useParams()
   const schedule = schedules[id - 1]
   // const [matchweek, setMatchweek] = useState('')
   // const location = useLocation()

   // const getMatchweek = () => {
   //    const matchweekById = id
   //    setMatchweek(matchweekById)
   // }
   // //Get matchweek data
   // useEffect(() => {
   //    getMatchweek()
   // }, [])

   // //Change country page
   // useEffect(() => {
   //    getMatchweek()
   // }, [location.pathname])

   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ width: '100%' }} margin={1}>
            <Accordion>
               <AccordionSummary sx={{ backgroundColor: theme.secondary }}>
                  <Typography
                     align="center"
                     sx={{
                        width: '100%',
                        color: `${theme.Other2}`,
                        fontSize: '20px',
                        fontWeight: 'bold',
                     }}
                  >
                     MatchWeek #{id}
                  </Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography component="ul" sx={{ listStyleType: 'none' }}>
                     {schedule.map((match) => {
                        return (
                           <Match
                              match={match}
                              theme={theme}
                              key={match[0] + match[1]}
                           />
                        )
                     })}
                  </Typography>
               </AccordionDetails>
            </Accordion>
         </Box>
      </Box>
   )
}
