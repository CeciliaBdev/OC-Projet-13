import { Link } from 'react-router-dom'

function Transaction() {
  const datas = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x67124)',
      amount: '10,928.42 ',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x5201)',
      amount: '184.30',
      description: 'Current Balance',
    },
  ]
  return (
    <div className="w-full flex flex-col gap-5">
      {datas.map((data) => {
        return (
          <div
            key={data.title}
            className="border border-red w-[100%] h-24 text-left p-4  text-slate-500 text-base bg-white flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{data.title}</div>
              <div className="text-3xl text-slate-800">${data.amount}</div>
              <div className="font-light">{data.description}</div>
            </div>
            <button
              type="button"
              className="border bg-[indigo] rounded h-10 w-48 text-white"
            >
              <Link to="/TransactionsPage">View Description</Link>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Transaction
