import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const SchedulePage = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
         }}
      >
         <Header />
         <div> Schedule </div>
         <Footer />
      </div>
   )
}
