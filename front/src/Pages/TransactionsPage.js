import { useParams } from 'react-router'
import Logout from '../components/Logout'
import { datas } from '../Datas/datas_account.js'

function TransactionsPage() {
  const index = useParams()
  console.log('index', index)

  return (
    <div>
      <Logout />
      Transaction Page
    </div>
  )
}

export default TransactionsPage
