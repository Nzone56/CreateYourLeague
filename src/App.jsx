import './styles/index.css'
import { Footer } from './components/footer'
import { Header } from './components/Header'
import { Standings } from './components/Standings'
import { LeagueProvider } from './context/league/LeagueProvider'
import { ThemeProvider } from './context/themes/ThemeProvider'

export const App = () => {
   return (
      <ThemeProvider>
         <LeagueProvider>
            <Header />
            <Standings />
            <Footer />
         </LeagueProvider>
      </ThemeProvider>
   )
}

export default App
