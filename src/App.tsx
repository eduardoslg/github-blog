import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Routes } from './routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/defaultTheme'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}
