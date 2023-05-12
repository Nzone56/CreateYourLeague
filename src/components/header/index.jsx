import { ThemeContext } from '@emotion/react'
import { AppBar, Typography } from '@mui/material'
import { useContext } from 'react'

export const Header = () => {
   const { theme, setTheme } = useContext(ThemeContext)
   console.log(theme)
   return <AppBar position="sticky"> Holaaaaaaa </AppBar>
}
