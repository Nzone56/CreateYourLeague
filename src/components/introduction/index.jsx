import { Typography, Box, Paper, Card, CardContent } from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useNavigate } from 'react-router-dom'
import LeagueCards from './LeagueCards'
// import second from '../../assets/images/'

export const Introduction = () => {
   const { selectLeague } = useContext(LeagueContext)
   const navigate = useNavigate()

   const handleSelectLeague = (leagueName) => {
      selectLeague(leagueName)
      navigate('/season/standings')
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
         }}
      >
         <Typography variant="h3" mb={4}>
            SELECT YOUR LEAGUE
         </Typography>
         <Grid container spacing={2} justifyContent="center">
            <LeagueCards handleSelectLeague={handleSelectLeague} />
         </Grid>
      </Box>
   )
}
