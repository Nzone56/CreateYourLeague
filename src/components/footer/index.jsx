import { Box, Typography } from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useContext } from 'react'

export const Footer = () => {
   const { league } = useContext(LeagueContext)

   return (
      <Box
         sx={{
            backgroundColor: league.theme.secondary,
            color: league.theme.tertiary,
            padding: '20px',
            textAlign: 'center',
            marginTop: 'auto',
            maxWidth: '100vw',
         }}
      >
         <Typography> {league.competition}</Typography>
      </Box>
   )
}
