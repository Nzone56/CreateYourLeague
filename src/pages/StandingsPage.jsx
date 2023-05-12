import { LeagueTable } from '../components/leagueTable'
import { Standings } from '../components/leagueTable/Standings'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const StandingsPage = () => {
   return (
      <>
         <Header />
         <LeagueTable />
         <Footer />
      </>
   )
}
