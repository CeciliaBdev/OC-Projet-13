import { Routes, Route } from 'react-router-dom'

import Index from './Pages/Index.js'
import SignIn from './Pages/SignIn.js'
import TransactionsPage from './Pages/TransactionsPage.js'
import User from './Pages/User'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/user/account/:account_ID"
          element={<TransactionsPage />}
        />
      </Routes>
    </div>
  )
}

export default App
