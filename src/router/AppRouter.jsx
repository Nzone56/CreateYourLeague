import { Route, Routes } from 'react-router-dom'
import { useSeason } from '../helpers/hooks/useSeason'
import {
   ClubsPage,
   HomePage,
   LandingPage,
   LeaguePage,
   SchedulePage,
   StandingsPage,
} from '../pages'
import { LeagueContext } from '../context/league/LeagueProvider'
import { useContext } from 'react'

export const AppRouter = () => {
   const { league } = useContext(LeagueContext)

   if (Object.keys(league).length === 0) {
      return <LandingPage />
   }

   return (
      <Routes>
         <Route path="/season" element={<HomePage />} />
         <Route path="/season/standings" element={<StandingsPage />} />
         <Route path="/season/schedule" element={<SchedulePage />} />
         <Route path="/season/league" element={<LeaguePage />} />
         <Route path="/season/clubs" element={<ClubsPage />} />
      </Routes>
   )
}
