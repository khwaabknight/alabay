import mechanic from '../assets/mechanic.png'
import merchdog from '../assets/merchdog.png'
import trophydog from '../assets/trophydog.png'
import vikingdog from '../assets/vikingdog.png'

const data = [
    {
        id:1,
        image: mechanic,
        title:'Community Building',
        subtitle:'and Initial Launch',
        background: 'bg-gradient-to-b from-[#dbc70c] from-0% to-[#ffff00] to-60%'
    },
    {
        id:2,
        image: merchdog,
        title:'Merchandise',
        subtitle:'Store Launch',
        background: 'bg-gradient-to-b from-[#00d4d4] from-0% to-[#41ffff] to-80%'
    },
    {
        id:3,
        image: trophydog,
        title:'Community Events',
        subtitle:'and contests',
        background: 'bg-[#d427ff]'
    },
    {
        id:4,
        image: vikingdog,
        title:'Expansion and New',
        subtitle:'Features',
        background: 'bg-[#8f3a3c]'
    }
]

function CommunityEtc() {
  return (
    <div className='w-11/12 mx-auto mt-32'>
        <div className='flex gap-5 w-full rounded-3xl overflow-hidden'>
            {
                data.map(item => (
                    <div key={item.id} className={`${item.background} w-1/4 flex flex-col justify-between relative before:w-[105%] before:h-[105%] before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#ffffff00] before:from-30% before:to-[#ffffffff] before:to-90% before:z-20`}>
                        <div className='p-5'>
                            <h3 className='font-montserrat text-4xl text-white text-center font-black'>{item.title}</h3>
                            <h4 className='font-montserrat text-2xl text-white text-center font-black'>{item.subtitle}</h4>
                        </div>
                        <div className='p-0'>
                            <img src={item.image} alt="" className='w-full' loading='lazy'/>
                        </div>
                    </div>
                ))
            }
        </div>                
    </div>
  )
}

export default CommunityEtc