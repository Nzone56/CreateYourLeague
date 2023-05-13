import { LeagueTable } from '../components/leagueTable'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const StandingsPage = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100vw',
         }}
      >
         <Header />
         <LeagueTable />
         <Footer />
      </div>
   )
}
