import { Box } from '@mui/material'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Clubs } from '../components/clubs'

export const ClubsPage = () => {
   return (
      <Box
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
         }}
      >
         <Header />
         <Clubs />
         <Footer />
      </Box>
   )
}
