import {
   Table,
   TableBody,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useContext } from 'react'
import {
   StyledTableRow,
   StyledTableCell,
} from '../../helpers/standings/styledTable'
import { headers, createRows } from '../../helpers/standings/dataToTable'
import { ClubCell } from './ClubCell'

export const StandingsTable = ({ teams }) => {
   const { league } = useContext(LeagueContext)
   const rows = createRows(teams) // Teams should be ordered by position
   return (
      <TableContainer
         sx={{ width: '85%', display: 'flex', justifyContent: 'center' }}
      >
         <Table
            sx={{ maxWidth: 1250 }}
            aria-label="Standings Table"
            stickyHeader={true}
         >
            <TableHead>
               <TableRow>
                  {headers.map((header) => (
                     <StyledTableCell
                        key={header}
                        theme={league.theme}
                        align={header === 'Club' ? 'left' : 'center'}
                     >
                        {header}
                     </StyledTableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                     {headers.map((header) => (
                        <StyledTableCell
                           key={`${row.position}-${header}`}
                           theme={league.theme}
                           align={header === 'Club' ? 'left' : 'center'}
                        >
                           {header === 'Club' ? (
                              <ClubCell
                                 logo={row.logo}
                                 clubName={row[header]}
                              />
                           ) : header === 'Points' ? (
                              <Typography sx={{ fontWeight: 'bold' }}>
                                 {row[header]}
                              </Typography>
                           ) : (
                              row[header]
                           )}
                        </StyledTableCell>
                     ))}
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
