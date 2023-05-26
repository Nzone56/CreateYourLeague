import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const updateResults = () => {
   const { league } = useContext(LeagueContext)
   return league.clubs
}
