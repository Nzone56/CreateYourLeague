import { Box } from '@mui/material'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const HomePage = () => {
   return (
      <Box
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
         }}
      >
         <Header />
         <div> Home </div>
         <Footer />
      </Box>
   )
}
