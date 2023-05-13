import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const HomePage = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
         }}
      >
         <Header />
         <div> Home </div>
         <Footer />
      </div>
   )
}
