import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index.js'
import SignIn from './Pages/SignIn.js'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
