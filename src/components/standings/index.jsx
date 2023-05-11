import { useContext, useState } from 'react'
import { seasonDataTemplate } from '../../helpers/data/PremierLeague22Template'
import { Typography } from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const Standings = () => {
   const { league } = useContext(LeagueContext)

   console.log(league)

   const [teams, setTeams] = useState(league.clubs)

   const startSeason = () => {
      setTeams(
         teams.map((team) => {
            return {
               ...team,
               seasonDataTemplate,
            }
         })
      )
   }
   return (
      <>
         <Typography> PREMIER LEAGUE TABLE </Typography>
         <ul>
            {teams?.map((team) => {
               return (
                  <li key={team.id}>
                     {' '}
                     {team.name} // {team.seasonDataTemplate?.points}
                  </li>
               )
            })}
         </ul>
         <button onClick={startSeason}> START SEASON /</button>
      </>
   )
}
