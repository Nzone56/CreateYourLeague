import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Schedules } from '../components/schedules'

export const SchedulePage = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            maxWidth: '100%',
         }}
      >
         <Header />
         <Schedules />
         <Footer />
      </div>
   )
}
