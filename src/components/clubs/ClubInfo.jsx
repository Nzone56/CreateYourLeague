import { useContext, useState } from 'react'
import { Footer } from '../footer'
import { ClubBanner } from './ClubBanner'
import { ClubNavBar } from './ClubNavBar'
import { ClubOverview } from './ClubOverview'
import { ClubSquad } from './ClubSquad'
import { ClubStats } from './stats/ClubStats'
import { ClubSchedule } from './ClubSchedule'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { ScheduleContext } from '../../context/schedule/ScheduleProvider'
import { getUpdatedTeams } from '../../helpers/standings/getUpdatedTeams'
import { useParams } from 'react-router-dom'

export const ClubInfo = () => {
   const { league } = useContext(LeagueContext)
   const { schedules } = useContext(ScheduleContext)
   const { name } = useParams()
   const updatedClubs = getUpdatedTeams(league.clubs, schedules)
   const club = updatedClubs.find((club) => {
      return club.name.toLowerCase() === name
   })

   const [activeTab, setActiveTab] = useState('overview')

   const handleTabChange = (tabValue) => {
      setActiveTab(tabValue)
   }

   const contentComponents = {
      overview: <ClubOverview club={club} />,
      squad: <ClubSquad club={club} />,
      fixtures: <ClubSchedule club={club} isPlayed={false} />,
      results: <ClubSchedule club={club} isPlayed={true} />,
      stats: <ClubStats club={club} />,
   }

   const contentComponent = contentComponents[activeTab] || null

   return (
      <>
         <ClubBanner club={club} />
         <ClubNavBar club={club} handleTabChange={handleTabChange} />
         {contentComponent}
         <Footer />
      </>
   )
}
