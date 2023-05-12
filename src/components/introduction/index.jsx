import { Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useNavigate } from 'react-router-dom'
import LeagueCards from './LeagueCards'
import LandingPageBg from '../../assets/images/LandingPageBg.jpg'
// import second from '../../assets/images/'

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
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${LandingPageBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      >
         <Typography variant="h3" mb={4} sx={{ color: 'white' }}>
            SELECT YOUR LEAGUE
         </Typography>
         <Grid container spacing={2} justifyContent="center">
            <LeagueCards handleSelectLeague={handleSelectLeague} />
         </Grid>
      </Box>
   )
}
