import './styles/index.css'
import { LeagueProvider } from './context/league/LeagueProvider'
import { ThemeProvider } from './context/themes/ThemeProvider'
import { AppRouter } from './router/AppRouter'

export const LeagueApp = () => {
   return (
      <ThemeProvider>
         <LeagueProvider>
            <AppRouter />
         </LeagueProvider>
      </ThemeProvider>
   )
}
