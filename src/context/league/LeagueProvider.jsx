import { PremierLeagueTeams } from '../../helpers/data/PremierLeague22Template'
import { createContext, useState } from 'react'

const LeagueContext = createContext()

const leagues = {
   PremierLeague: PremierLeagueTeams,
   //    LaLiga: LaLigaTeams.clubs,
   //    SerieA: SerieATeams.clubs,
   //    Bundesliga: BundesligaTeams.clubs,
   //    Ligue1: Ligue1.clubs,
}

const LeagueProvider = ({ children }) => {
   const [league, setLeague] = useState(leagues.PremierLeague)

   const selectLeague = (leagueName) => {
      setLeague(leagues.leagueName)
   }
   return (
      <LeagueContext.Provider value={{ league, selectLeague }}>
         {children}
      </LeagueContext.Provider>
   )
}

export { LeagueContext, LeagueProvider }
