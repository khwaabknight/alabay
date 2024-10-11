import moneydog from '../assets/moneydog.png'

const data = [
    {
        title: 'Liquidity',
        desc: 'Locked',
    },
    {
        title: 'Contract',
        desc: 'Renounced',
    },
    {
        title: 'Taxes',
        desc: '0%',
    }
]
function Tokenomics() {
  return (
    <div className='bg-[url("./assets/bg-tokenomics.png")] w-full xl:min-h-[200vh] xl:bg-center lg:min-h-[150vh] bg-no-repeat bg-stretch pt-8 flex flex-col justify-center'>
        <div>
            <h2 className='font-cheeseburga w-11/12 mx-auto huge-font text-white'>Tokenomics</h2>
        </div>
        <div className='flex justify-between w-11/12 mx-auto'>
            <div className="w-5/12 flex flex-col justify-center gap-16 items-start">
                {
                    data.map(item => (
                        <div key={item.title} className='px-16 py-4 bg-theme-gray shadow-xl shadow-[#A87D29] w-full rounded-3xl'>
                            <h3 className='font-montserrat uppercase xl:text-5xl md:text-3xl text-white font-black'>{item.title}</h3>
                            <h4 className='font-montserrat uppercase xl:text-7xl md:text-5xl text-[#FFF280] font-black'>{item.desc}</h4>
                        </div>
                    ))
                }
            </div>
            <div className='w-6/12'>
                <img src={moneydog} alt="" className='reflection' loading='lazy'/>
            </div>
        </div>
    </div>
  )
}

export default Tokenomics