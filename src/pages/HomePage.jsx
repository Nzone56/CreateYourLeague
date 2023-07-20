import { Box } from '@mui/material'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { LeagueHome } from '../components/home'

export const HomePage = () => {
   return (
      <Box>
         <Header />
         <LeagueHome />
         <Footer />
      </Box>
   )
}
