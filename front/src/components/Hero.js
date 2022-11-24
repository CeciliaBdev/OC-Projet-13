import banktree from '../assets/bank-tree.jpeg'
function Hero() {
  return (
    <div>
      <div className="relative mb-5">
        <img
          src={banktree}
          alt="fond d'écran"
          style={{
            width: '100vw',
            height: '50vh',
            objectFit: 'cover',
          }}
        />
        <div className="absolute top-1/4  bg-white p-8 w-72 right-20 s:right-16">
          <h2 className="font-bold">No fees.</h2>
          <h2 className="font-bold">No minimum deposit.</h2>
          <h2 className="font-bold">High interest rates.</h2>
          <p className="mt-5">Open a savings account width Argent Bank Today</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
