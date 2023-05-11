import './styles/index.css'
import { Footer } from './components/footer'
import { Header } from './components/Header'
import { LeagueTable } from './components/leagueTable'
import { LeagueProvider } from './context/league/LeagueProvider'
import { ThemeProvider } from './context/themes/ThemeProvider'

export const LeagueApp = () => {
   return (
      <ThemeProvider>
         <LeagueProvider>
            <Header />
            <LeagueTable />
            <Footer />
         </LeagueProvider>
      </ThemeProvider>
   )
}
