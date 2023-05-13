import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

const createData = (
   id,
   position,
   name,
   PJ,
   W,
   D,
   L,
   GF,
   GA,
   GD,
   PTS,
   form,
   next
) => {
   return { id, position, name, PJ, W, D, L, GF, GA, GD, PTS, form, next }
}

export const Standings = ({ teams }) => {
   const rows = createRows(teams)

   return (
      <TableContainer
         sx={{ width: '70%', display: 'flex', justifyContent: 'center' }}
      >
         <Table
            size={'small'}
            // sx={{ maxWidth: 650 }}
            aria-label="Standings Table"
            stickyHeader={true}
            padding={'checkbox'}
         >
            <TableHead>
               <TableRow>
                  <TableCell> Position </TableCell>
                  <TableCell> Club </TableCell>
                  <TableCell align="right">Played</TableCell>
                  <TableCell align="right">Won</TableCell>
                  <TableCell align="right">Drawn</TableCell>
                  <TableCell align="right">Lost</TableCell>
                  <TableCell align="right">GF</TableCell>
                  <TableCell align="right">GA</TableCell>
                  <TableCell align="right">GD</TableCell>
                  <TableCell align="right">Points</TableCell>
                  <TableCell align="right">Form</TableCell>
                  <TableCell align="right">Next</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow key={row.position}>
                     <TableCell>{row.position}</TableCell>
                     <TableCell align="left">{row.name}</TableCell>
                     <TableCell align="right">{row.PJ}</TableCell>
                     <TableCell align="right">{row.W}</TableCell>
                     <TableCell align="right">{row.D}</TableCell>
                     <TableCell align="right">{row.L}</TableCell>
                     <TableCell align="right">{row.GF}</TableCell>
                     <TableCell align="right">{row.GA}</TableCell>
                     <TableCell align="right">{row.GD}</TableCell>
                     <TableCell align="right">{row.PTS}</TableCell>
                     <TableCell align="right">{row.form}</TableCell>
                     <TableCell align="right">{row.next}</TableCell>
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
         team.short_name,
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
