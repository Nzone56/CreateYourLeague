import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material'
import { ClubCell } from '../leagueTable/ClubCell'
import { StyledTableCell } from '../../helpers/standings/styledTable'
import { useContext } from 'react'
import { LeagueContext } from '../../context/league/LeagueProvider'

export const StandingsPrev = () => {
   const { league } = useContext(LeagueContext)

   console.log(league.clubs)
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
                  <StyledTableCell theme={league.theme}>Points</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {league.clubs.map((team) => (
                  <TableRow key={team.id}>
                     <TableCell>
                        <Typography>{team.position}</Typography>
                     </TableCell>
                     <TableCell>
                        <ClubCell clubName={team.name} />
                     </TableCell>
                     <TableCell>
                        <Typography>{team.seasonData.points}</Typography>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
