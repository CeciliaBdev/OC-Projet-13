import icon_chat from '../assets/icon-chat.png'
import icon_money from '../assets/icon-money.png'
import icon_security from '../assets/icon-security.png'

const datasMocked = [
  {
    type: 'chat',
    icon: 'icon-chat.png',
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    type: 'money',
    icon: 'icon-money.png',
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    type: 'security',
    icon: 'icon-security/png',
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

function FeaturesItem() {
  return (
    <div className="grid grid-cols-3 h-[50vh] justify-items-center items-center">
      {datasMocked.map((data) => {
        let image

        // affichage de l'icone suivant le 'type'
        if (data.type === 'chat') {
          image = <img src={icon_chat} alt="Chat Icon" className="w-24 " />
        }
        if (data.type === 'money') {
          image = <img src={icon_money} alt="Money Icon" className="w-24" />
        }
        if (data.type === 'security') {
          image = (
            <img src={icon_security} alt="Security Icon" className="w-24" />
          )
        }

        return (
          <div
            key={data.title}
            className=" text-center flex flex-col gap-3 w-64 h-72 "
          >
            <div className="h-40 w-40  p-5 border-[10px] border-[#00bc77] rounded-full mx-auto">
              {image}
            </div>
            <p className="font-bold">{data.title}</p>
            <p className="font-light text-sm">{data.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturesItem
