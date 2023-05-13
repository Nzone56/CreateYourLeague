import {
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
import ArsenalLogo from '../../assets/images/PremierLeague/ArsenalLogo.svg'
const createData = (
   id,
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
   const logo_url = league.clubs[0].logo_url
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
                  <TableRow key={row.position}>
                     {headers.map((header) => (
                        <StyledTableCell
                           key={`${row.position}-${header}`}
                           theme={league.theme}
                           align={header === 'Club' ? 'left' : 'center'}
                        >
                           {header === 'Club' ? (
                              <>
                                 <img
                                    // src={`../../assets/images/PremierLeague/${row.logo_url}`}
                                    src={ArsenalLogo}
                                    alt="Club Logo"
                                    width="30"
                                    height="30"
                                    style={{
                                       marginRight: '5px',
                                    }}
                                 />
                                 {row[header]}
                              </>
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
