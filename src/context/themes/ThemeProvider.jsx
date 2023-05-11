import { createContext, useState } from 'react'

const ThemeContext = createContext()

export const themes = {
   default: {
      foreground: '#ffffff',
      background: '#222222',
   },
   PremierLeague: {
      foreground: '#000000',
      background: '#eeeeee',
   },
   LaLiga: {
      foreground: '#ffffff',
      background: '#222222',
   },
   Bundesliga: {
      foreground: '#000000',
      background: '#eeeeee',
   },
   Ligue1: {
      foreground: '#ffffff',
      background: '#222222',
   },
   SerieA: {
      foreground: '#ffffff',
      background: '#222222',
   },
}

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(themes.default)

   const selectTheme = (leagueName) => {
      setTheme(themes.leagueName)
   }

   return (
      <ThemeContext.Provider value={{ theme, selectTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}

export { ThemeContext, ThemeProvider }
