import { useContext } from 'react'
import { LeagueCard } from './LeagueCard'
import { LeagueContext } from '../../context/league/LeagueProvider'

const LeagueCards = ({ handleSelectLeague }) => {
   const { leagues } = useContext(LeagueContext)

   return (
      <>
         {Object.values(leagues).map((league) => (
            <LeagueCard
               league={league}
               handleSelectLeague={handleSelectLeague}
               key={league.id}
            />
         ))}
      </>
   )
}

export default LeagueCards
