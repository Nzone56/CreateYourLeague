import { Box } from '@mui/material'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Schedule } from '../components/schedule'
import { MatchWeek } from '../components/schedule/MatchWeek'

export const SchedulePage = () => {
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
         <Schedule />
         <MatchWeek />
         <Footer />
      </Box>
   )
}
