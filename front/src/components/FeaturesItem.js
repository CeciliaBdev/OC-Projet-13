import icon_chat from '../assets/icon-chat.png'
import icon_money from '../assets/icon-money.png'
import icon_security from '../assets/icon-security.png'

const datasMocked = [
  {
    type: 'chat',
    img: icon_chat,
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    type: 'money',
    img: icon_money,
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    type: 'security',
    img: icon_security,
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

function FeaturesItem() {
  return (
    <div className="grid md:grid-cols-3 md:h-[50vh] justify-items-center items-center sm:grid-cols-1 sm:h-[100%]">
      {datasMocked.map((data, index) => (
        <div
          key={index}
          className=" text-center flex flex-col gap-3 w-64 h-72 s:h-80"
        >
          <div className="h-40 w-40  p-5 border-[10px] border-[#00bc77] rounded-full mx-auto ">
            <img src={data.img} alt={data.type} className="w-24" />
          </div>
          <p className="font-bold">{data.title}</p>
          <p className="font-light text-sm">{data.text}</p>
        </div>
      ))}
    </div>
  )
}
export default FeaturesItem
