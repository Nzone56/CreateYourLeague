import {
   Box,
   Table,
   TableBody,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useContext } from 'react'
import {
   StyledTableRow,
   StyledTableCell,
} from '../../helpers/hooks/standings/StyledTable'
import { headers, createRows } from '../../helpers/hooks/standings/DataToTable'

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
                              <Box
                                 sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                 }}
                              >
                                 <img
                                    src={`../src/assets/images/PremierLeague/${row.logo}`}
                                    alt="Club Logo"
                                    width="30"
                                    height="30"
                                    style={{
                                       marginRight: '5px',
                                    }}
                                 />
                                 {row[header]}
                              </Box>
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
