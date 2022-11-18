import { Link } from 'react-router-dom'

function Transaction({ index, title, amount, description }) {
  return (
    // <div className="w-full flex flex-col gap-5">
    <div className="border border-red w-[100%] h-24 text-left p-4  text-slate-500 text-base bg-white flex justify-between items-center">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-3xl text-slate-800">${amount}</div>
        <div className="font-light">{description}</div>
      </div>
      <button
        type="button"
        className="border bg-[indigo] rounded h-10 w-48 text-white"
      >
        <Link to={`/user/account/${index}`}>View Description</Link>
      </button>
      {/* </div> */}
    </div>
  )
}

export default Transaction
