import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Box } from '@mui/material'
import { ClubSideBar } from './ClubSideBar'
import { ClubInfo } from './ClubInfo'

export const Clubs = () => {
   const { league } = useContext(LeagueContext)

   return (
      <Box sx={{ display: 'flex' }}>
         <ClubSideBar clubs={league.clubs} theme={league.theme} />
         <ClubInfo />
      </Box>
   )
}
