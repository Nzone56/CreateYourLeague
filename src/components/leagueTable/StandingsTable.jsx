import {
   Box,
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
import { headers } from '../../helpers/standings/dataToTable'
import { ClubCell } from './ClubCell'

export const StandingsTable = ({ teams, createRows }) => {
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
                              <ClubCell clubName={row[header]} />
                           ) : header === 'Points' ? (
                              <Typography sx={{ fontWeight: 'bold' }}>
                                 {row[header]}
                              </Typography>
                           ) : header === 'Form' ? (
                              <Box
                                 style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                 }}
                              >
                                 {row[header].map((item, index) => (
                                    <Typography
                                       key={index}
                                       sx={{
                                          fontWeight: 'bold',
                                          color:
                                             item === 'W'
                                                ? 'green'
                                                : item === 'D'
                                                ? 'gray'
                                                : 'red',
                                          marginRight: '5px',
                                       }}
                                    >
                                       {item}
                                    </Typography>
                                 ))}
                              </Box>
                           ) : header === 'Next' ? (
                              <Box
                                 sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                 }}
                              >
                                 <img
                                    src={`/assets/images/PremierLeague/${row[header]}/logo.svg`}
                                    alt="Club Logo"
                                    width="30"
                                    height="30"
                                 />
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
