import { useSeason } from '../../helpers/hooks/useSeason'
import { Typography, Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { Navigate, useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
}))

export const Introduction = () => {
   const { leagues, selectLeague } = useContext(LeagueContext)
   const navigate = useNavigate()

   const handleSelectLeague = (leagueName) => {
      console.log(leagueName)
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
         <Typography variant="h4" mb={4}>
            SELECT YOUR LEAGUE
         </Typography>
         <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
         >
            {Object.values(leagues).map((league) => (
               <Grid xs={2} sm={4} md={4} key={league.id}>
                  <a onClick={() => handleSelectLeague(league.name)}>
                     <Item>
                        <Typography>{league.competition}</Typography>
                     </Item>
                  </a>
               </Grid>
            ))}
         </Grid>
      </Box>
   )
}
