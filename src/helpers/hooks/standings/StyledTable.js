import styled from '@emotion/styled'
import { TableCell, TableRow, tableCellClasses } from '@mui/material'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.secondary,
      color: theme.Other2,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      color: theme.secondary,
      padding: 15,
   },
}))
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(5)': {
      // Select the 5th row
      backgroundColor: '#FA7B17',
   },
   '&:nth-of-type(-n+4)': {
      // Select the first 3 rows
      backgroundColor: '#4285F4',
   },
   '&:nth-last-of-type(-n+3)': {
      // Select the last 3 rows
      backgroundColor: '#EA4335',
   },
}))
