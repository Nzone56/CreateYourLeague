import { useContext, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
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
      <Box
         m={20}
         sx={{
            backgroundColor: '#37003c',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
         }}
      >
         <Typography> -- LEAGUE TABLE -- </Typography>
         {teams ? (
            <Standings teams={teams} />
         ) : (
            <button onClick={handleSelectLeague}> PREMIER LEAGUE </button>
         )}
      </Box>
   )
}
