import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Clubs } from '../components/clubs'
import { Box } from '@mui/material'

export const ClubsPage = () => {
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
         <Clubs />
         <Footer />
      </Box>
   )
}
