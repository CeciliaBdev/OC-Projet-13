import { Link } from 'react-router-dom'

function Transaction({ account_ID, title, amount, description }) {
  return (
    // <div className="w-full flex flex-col gap-5">
    <div className="border border-red md:w-[100%]  h-24 text-left p-4  text-slate-500 text-base bg-white md:flex md:flex-row justify-between items-center md:h-24  s:h-40 s:flex-col">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-3xl text-slate-800">${amount}</div>
        <div className="font-light">{description}</div>
      </div>
      <button
        type="button"
        className="border bg-[indigo] rounded h-10 w-48 text-white"
      >
        <Link to={`/profile/account/${account_ID}`}>View Description</Link>
      </button>
      {/* </div> */}
    </div>
  )
}

export default Transaction
