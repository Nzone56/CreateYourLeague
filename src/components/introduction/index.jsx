import { Typography, Box } from '@mui/material'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useNavigate } from 'react-router-dom'
import { LeagueCards } from './LeagueCards'

export const Introduction = () => {
   const { selectLeague } = useContext(LeagueContext)
   const navigate = useNavigate()

   const handleSelectLeague = (leagueName) => {
      selectLeague(leagueName)
      navigate('/season/home')
   }

   return (
      <Box
         component="main"
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            maxWidth: '100vw',
            minHeight: '100vh',
            backgroundImage: `url(../../src/assets/images/LandingBg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      >
         <Typography variant="h3" mb={4} sx={{ color: 'white' }}>
            SELECT YOUR LEAGUE
         </Typography>

         <LeagueCards handleSelectLeague={handleSelectLeague} />
      </Box>
   )
}
