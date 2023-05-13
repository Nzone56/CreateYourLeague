import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const LeaguePage = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
         }}
      >
         <Header />
         <div> League </div>
         <Footer />
      </div>
   )
}
