import { Box } from '@mui/material'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { League } from '../components/league'

export const LeaguePage = () => {
   return (
      <Box
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
         }}
      >
         <Header />
         <League />
         <Footer />
      </Box>
   )
}
