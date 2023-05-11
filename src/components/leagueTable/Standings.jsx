import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

const createData = (id, position, name, PJ, W, D, L, GF, GA, GD, PTS) => {
   return { id, position, name, PJ, W, D, L, GF, GA, GD, PTS }
}

export const Standings = ({ teams }) => {
   teams.map((team) => console.log(team.seasonData.games_played))
   const rows = createRows(teams)

   return (
      <TableContainer component={Paper}>
         <Table size={'small'} sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell> Pos </TableCell>
                  <TableCell> Club </TableCell>
                  <TableCell align="right">PJ</TableCell>
                  <TableCell align="right">W</TableCell>
                  <TableCell align="right">D</TableCell>
                  <TableCell align="right">L</TableCell>
                  <TableCell align="right">GF</TableCell>
                  <TableCell align="right">GA</TableCell>
                  <TableCell align="right">GD</TableCell>
                  <TableCell align="right">PTS</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        {row.position}
                     </TableCell>
                     <TableCell align="left">{row.name}</TableCell>
                     <TableCell align="right">{row.PJ}</TableCell>
                     <TableCell align="right">{row.W}</TableCell>
                     <TableCell align="right">{row.D}</TableCell>
                     <TableCell align="right">{row.L}</TableCell>
                     <TableCell align="right">{row.GF}</TableCell>
                     <TableCell align="right">{row.GA}</TableCell>
                     <TableCell align="right">{row.GD}</TableCell>
                     <TableCell align="right">{row.PTS}</TableCell>
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
         team.seasonData.points
      )
   })

   return rows
}
