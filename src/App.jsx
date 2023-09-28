import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasePage from './pages/BasePage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
