import { useParams } from 'react-router'
import Footer from '../components/Footer'
import Logout from '../components/Logout'
import Table from '../components/Table'
import { datas } from '../Datas/datas_account.js'

function TransactionsPage() {
  const id = useParams()
  // const id_obj = JSON.parse(id_json)
  // je veux la value de index
  // console.log(id['index'])
  // console.log('js', id.index)

  const findIndex = datas.find((item) => item.account_ID === id.account_ID)
  console.log('findindex', findIndex)
  if (findIndex === undefined) {
    console.log('index non trouvé')
  } else
    return (
      <div>
        <Logout />
        <div className="border flex flex-col items-center w-full h-content py-5">
          <h1>{findIndex.title}</h1>
          <div className="text-3xl font-semibold">${findIndex.amount}</div>
          <div className="font-light">{findIndex.description}</div>
        </div>
        <div className="bg-[#E0E6ED] h-full py-32">
          <Table />
        </div>

        <Footer />
      </div>
    )
}

export default TransactionsPage
