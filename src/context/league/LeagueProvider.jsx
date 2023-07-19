import {
   PremierLeagueData,
   ClubStatsTemplate,
   LaLigaData,
   SerieAData,
   BundesligaData,
   Ligue1Data,
} from '../../data'
import { createContext, useState } from 'react'

const LeagueContext = createContext()

const LeagueProvider = ({ children }) => {
   const [league, setLeague] = useState({})

   const leagues = {
      PremierLeague: PremierLeagueData,
      LaLiga: LaLigaData,
      SerieA: SerieAData,
      Bundesliga: BundesligaData,
      Ligue1: Ligue1Data,
   }

   const startSeason = (selectedLeague) => {
      setLeague(() => {
         const updatedClubs = selectedLeague.clubs.map((club) => ({
            ...club,
            seasonData: { ...ClubStatsTemplate },
         }))

         return { ...selectedLeague, clubs: updatedClubs }
      })
   }

   const selectLeague = (leagueName) => {
      startSeason(leagues[leagueName]) //When we change the league, a new season starts.
   }
   return (
      <LeagueContext.Provider value={{ league, selectLeague, leagues }}>
         {children}
      </LeagueContext.Provider>
   )
}

export { LeagueContext, LeagueProvider }
