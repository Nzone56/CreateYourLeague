import styled from '@emotion/styled'
import { TableCell, TableRow, tableCellClasses } from '@mui/material'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.tertiary,
      color: theme.Other2,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      color: theme.secondary,
      padding: 15,
   },
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
   //CONFERENCE LEAGUE
   '&:nth-of-type(7) td:first-of-type': {
      backgroundColor: '#0C890C',
   },
   //EUROPA LEAGUE
   '&:nth-of-type(5) td:first-of-type, &:nth-of-type(6) td:first-of-type': {
      backgroundColor: '#FA7B17',
   },
   //CHAMPIONS LEAGUE
   '&:nth-of-type(-n+4) td:first-of-type': {
      backgroundColor: '#4285F4',
   },
   //RELEGATION
   '&:nth-last-of-type(-n+3) td:first-of-type': {
      backgroundColor: '#EA4335',
   },
}))
