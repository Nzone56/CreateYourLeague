import { Box } from '@mui/material'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const ClubCell = ({ clubName }) => {
   const { league } = useContext(LeagueContext)
   return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <img
            src={`/assets/images/${league.name}/${clubName}/logo.svg`}
            alt="Club Logo"
            width="30"
            height="30"
            style={{ marginRight: '10px' }}
         />
         {clubName}
      </Box>
   )
}
