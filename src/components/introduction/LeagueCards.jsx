import { useContext } from 'react'
import { LeagueCard } from './LeagueCard'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Grid } from '@mui/material'

export const LeagueCards = ({ handleSelectLeague }) => {
   const { leagues } = useContext(LeagueContext)

   return (
      <Grid
         container
         spacing={2}
         justifyContent="center"
         sx={{ width: '100%' }}
      >
         {Object.values(leagues).map((league) => (
            <LeagueCard
               league={league}
               handleSelectLeague={handleSelectLeague}
               key={league.id}
            />
         ))}
      </Grid>
   )
}
