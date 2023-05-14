import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { GenerateSchedule } from '../../helpers/schedules/generateSchedule'

export const Schedules = () => {
   const { league } = useContext(LeagueContext)
   const teamsCode = league.clubs.map((club) => {
      return club.club_code
   })
   const schedule = GenerateSchedule({ teams: teamsCode })

   console.log(schedule)
   return (
      <>
         {schedule.map((matchweek, index) => (
            <Typography> {index} </Typography>
         ))}
      </>
   )
}
