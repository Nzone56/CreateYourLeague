import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Route, Routes, useParams } from 'react-router-dom'
import { Footer } from '../footer'
import { ClubBanner } from './ClubBanner'
import { ClubNavBar } from './ClubNavBar'
import { ClubOverview } from './ClubOverview'
import { ClubResults } from './ClubResults'
import { ClubSquad } from './ClubSquad'
import { ClubFixtures } from './ClubFixtures'
import { ClubStats } from './ClubStats'

export const ClubInfo = () => {
   const { league } = useContext(LeagueContext)
   const { name } = useParams()
   const club = league.clubs.find((club) => {
      return club.name.toLowerCase() === name
   })

   return (
      <>
         <ClubBanner club={club} />
         <ClubNavBar club={club} />
         <Routes>
            <Route path="/overview" element={<ClubOverview club={club} />} />
            <Route path="/squad" element={<ClubSquad club={club} />} />
            <Route path="/fixtures" element={<ClubFixtures club={club} />} />
            <Route path="/results" element={<ClubResults club={club} />} />
            <Route path="/stats" element={<ClubStats club={club} />} />
         </Routes>
         <Footer />
      </>
   )
}
