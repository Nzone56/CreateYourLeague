import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useParams } from 'react-router-dom'
import { Footer } from '../footer'
import { ClubBanner } from './ClubBanner'
import { ClubNavBar } from './ClubNavBar'

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
         <Footer />
      </>
   )
}
