import {
   Box,
   CardMedia,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   tableCellClasses,
} from '@mui/material'
import { LeagueContext } from '../../context/league/LeagueProvider'
import { useContext } from 'react'
import styled from '@emotion/styled'

const createData = (
   id,
   logo,
   Position,
   Club,
   Played,
   Won,
   Draw,
   Lost,
   GF,
   GA,
   GD,
   Points,
   Form,
   Next
) => {
   return {
      id,
      logo,
      Position,
      Club,
      Played,
      Won,
      Draw,
      Lost,
      GF,
      GA,
      GD,
      Points,
      Form,
      Next,
   }
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.secondary,
      color: theme.Other2,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 25,
      color: theme.secondary,
      padding: 5,
   },
}))

const headers = [
   'Position',
   'Club',
   'Played',
   'Won',
   'Draw',
   'Lost',
   'GF',
   'GA',
   'GD',
   'Points',
   'Form',
   'Next',
]
export const Standings = ({ teams }) => {
   const { league } = useContext(LeagueContext)
   const rows = createRows(teams) // Teams should be ordered by position
   return (
      <TableContainer
         sx={{ width: '85%', display: 'flex', justifyContent: 'center' }}
      >
         {/* <img
            src={`../src/assets/images/PremierLeague/${logo_url}`}
            alt="Club Logo"
            style={{ marginRight: '5px' }}
         /> */}
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
                  <TableRow key={row.id}>
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
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}

function createRows(teams) {
   const rows = teams.map((team) => {
      return createData(
         team.id,
         team.logo_url,
         team.position,
         team.name,
         team.seasonData.games_played,
         team.seasonData.wins,
         team.seasonData.draws,
         team.seasonData.losses,
         team.seasonData.goals_scored,
         team.seasonData.goals_conceded,
         team.seasonData.goals_difference,
         team.seasonData.points,
         team.seasonData.form,
         team.seasonData.next_fixture
      )
   })

   return rows
}
