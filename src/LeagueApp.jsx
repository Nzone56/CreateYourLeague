import './styles/index.css'
import { LeagueProvider } from './context/league/LeagueProvider'
import { AppRouter } from './router/AppRouter'
import { ScheduleProvider } from './context/schedule/ScheduleProvider'

export const LeagueApp = () => {
   return (
      <LeagueProvider>
         <ScheduleProvider>
            <AppRouter />
         </ScheduleProvider>
      </LeagueProvider>
   )
}
