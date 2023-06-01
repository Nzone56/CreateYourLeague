import { Route, Routes } from 'react-router-dom'
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
import { MatchWeek } from '../components/schedule/MatchWeek'
import { Schedule } from '@mui/icons-material'
import { ClubInfo } from '../components/clubs/ClubInfo'

export const AppRouter = () => {
   const { league } = useContext(LeagueContext)

   if (Object.keys(league).length === 0) {
      return <LandingPage />
   }

   return (
      <Routes>
         <Route path="/season/home" element={<HomePage />} />
         <Route path="/season/standings" element={<StandingsPage />} />
         <Route path="/season/league" element={<LeaguePage />} />
         <Route path="/season/clubs" element={<ClubsPage />} />
         <Route path="/season/clubs/:name" element={<ClubInfo />} />
         <Route path="/welcome" element={<LandingPage />} />
         <Route path="/season/schedule" element={<SchedulePage />}>
            <Route path="/season/schedule/" element={<Schedule />} />
            <Route
               path="/season/schedule/matchweek/:id"
               element={<MatchWeek />}
            />
         </Route>
      </Routes>
   )
}
