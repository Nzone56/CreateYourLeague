import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useContext } from 'react'
import { ClubCell } from '../leagueTable/ClubCell'
import { StyledTableCell } from '../../helpers/standings/styledTable'
import { sortHistoricTeams } from '../../helpers/home/sortHistoricTeams'

export const ChampionsTable = () => {
   const { league } = useContext(LeagueContext)
   const teams = sortHistoricTeams(league.clubs)

   return (
      <TableContainer
         sx={{
            width: '100%',
            height: '50%',
         }}
      >
         <Table>
            <TableHead sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
               <TableRow>
                  <StyledTableCell theme={league.theme}>
                     Position
                  </StyledTableCell>
                  <StyledTableCell theme={league.theme}>Team</StyledTableCell>
                  <StyledTableCell theme={league.theme}>Titles</StyledTableCell>
                  <StyledTableCell theme={league.theme}>
                     Subtitles
                  </StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {teams.map((team, index) => (
                  <TableRow key={team.id}>
                     <TableCell>
                        <Typography>{index + 1}</Typography>
                     </TableCell>
                     <TableCell>
                        <ClubCell clubName={team.name} />
                     </TableCell>
                     <TableCell>
                        <Typography>{team.titles}</Typography>
                     </TableCell>
                     <TableCell>
                        <Typography>{team.subtitles}</Typography>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
