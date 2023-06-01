import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useParams } from 'react-router-dom'
import { Footer } from '../footer'
import { ClubBanner } from './ClubBanner'

export const ClubInfo = () => {
   console.log('AAAAAAAAAAAAAAAAAAA')
   const { league } = useContext(LeagueContext)
   const { name } = useParams()
   const club = league.clubs.find((club) => {
      return club.name === name
   })
   return (
      <>
         <ClubBanner />
         <Footer />
      </>
   )
}
