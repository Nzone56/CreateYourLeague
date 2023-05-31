import { LeagueTable } from '../components/leagueTable'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Box } from '@mui/material'

export const StandingsPage = () => {
   return (
      <Box
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%',
         }}
      >
         <Header />
         <LeagueTable />
         <Footer />
      </Box>
   )
}
