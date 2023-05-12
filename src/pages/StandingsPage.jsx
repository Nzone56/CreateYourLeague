import { TableFooter } from '@mui/material'
import { LeagueTable } from '../components/leagueTable'
import { Standings } from '../components/leagueTable/Standings'
import { Header } from '../components/header'

export const StandingsPage = () => {
   return (
      <>
         <Header />
         <LeagueTable />
         <TableFooter />
      </>
   )
}
