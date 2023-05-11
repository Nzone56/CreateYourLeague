import { useContext, useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Standings } from './Standings'
export const LeagueTable = () => {
   const { league, selectLeague } = useContext(LeagueContext)
   const [teams, setTeams] = useState(league.clubs)

   useEffect(() => {
      setTeams(league.clubs)
   }, [league])

   const handleSelectLeague = () => {
      selectLeague('PremierLeague')
   }

   return (
      <>
         <Typography> PREMIER LEAGUE TABLE </Typography>
         {/* <ul>
            {teams?.map((team) => {
               return (
                  <li key={team.id}>
                     {team.name} // {team.seasonData?.points}
                  </li>
               )
            })}
         </ul> */}
         {teams ? (
            <Standings teams={teams} />
         ) : (
            <button onClick={handleSelectLeague}> PREMIER LEAGUE </button>
         )}
      </>
   )
}
