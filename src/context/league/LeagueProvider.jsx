import {
   PremierLeagueTeams,
   seasonDataTemplate,
} from '../../helpers/data/PremierLeague22Template'
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
   const [league, setLeague] = useState({})

   const startSeason = (selectedLeague) => {
      setLeague(() => {
         const updatedClubs = selectedLeague.clubs.map((club) => ({
            ...club,
            seasonData: { ...seasonDataTemplate },
         }))

         return { ...league, clubs: updatedClubs }
      })
   }

   const selectLeague = (selectedLeague) => {
      startSeason(leagues[selectedLeague]) //When we change the league, a new season starts.
   }
   return (
      <LeagueContext.Provider value={{ league, selectLeague }}>
         {children}
      </LeagueContext.Provider>
   )
}

export { LeagueContext, LeagueProvider }
