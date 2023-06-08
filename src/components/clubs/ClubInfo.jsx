import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Route, Routes, useParams } from 'react-router-dom'
import { Footer } from '../footer'
import { ClubBanner } from './ClubBanner'
import { ClubNavBar } from './ClubNavBar'
import { ClubOverview } from './ClubOverview'
import { ClubSquad } from './ClubSquad'
import { ClubStats } from './ClubStats'
import { ClubSchedule } from './ClubSchedule'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'
import { getUpdatedTeams } from '../../helpers/standings/getUpdatedTeams'

export const ClubInfo = () => {
   const { league } = useContext(LeagueContext)
   const { schedules } = useContext(ScheduleContext)
   const { name } = useParams()
   const updatedClubs = getUpdatedTeams(league.clubs, schedules)
   const club = updatedClubs.find((club) => {
      return club.name.toLowerCase() === name
   })

   return (
      <>
         <ClubBanner club={club} />
         <ClubNavBar club={club} />
         <Routes>
            <Route path="/overview" element={<ClubOverview club={club} />} />
            <Route path="/squad" element={<ClubSquad club={club} />} />
            <Route
               path="/fixtures"
               element={<ClubSchedule club={club} isPlayed={false} />}
            />
            <Route
               path="/results"
               element={<ClubSchedule club={club} isPlayed={true} />}
            />
            <Route path="/stats" element={<ClubStats club={club} />} />
         </Routes>
         <Footer />
      </>
   )
}
