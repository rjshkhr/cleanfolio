import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import Cv from './components/Cv/Cv'

render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cv' element={<Cv />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
