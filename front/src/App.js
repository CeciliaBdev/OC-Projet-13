import { Routes, Route } from 'react-router-dom'

import Index from './Pages/Index.js'
import SignIn from './Pages/SignIn.js'
import User from './Pages/User'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  )
}

export default App
