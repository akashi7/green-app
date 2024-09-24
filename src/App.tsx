import { Route, Routes } from 'react-router-dom'
import Dashboard from './routes/dashboard.route'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Dashboard />} />
      {/* <Route path='/' element={<div>nothing yet</div>} /> */}
    </Routes>
  )
}

export default App
