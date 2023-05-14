import { LeagueTable } from '../components/leagueTable'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const StandingsPage = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%',
         }}
      >
         <Header />
         <LeagueTable />
         <Footer />
      </div>
   )
}
