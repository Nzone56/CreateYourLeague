import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const ClubsPage = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
         }}
      >
         <Header />
         <div> Clubs </div>
         <Footer />
      </div>
   )
}
