import xlogo from '../assets/x.png';
import telegramlogo from '../assets/telegram.png';
import phonedog from '../assets/phonedog.png';

function SocialMediaLinks() {
  return (
    <div>
        <h2 className="font-cheeseburga huge-font font-black uppercase text-theme-orange w-10/12 mx-auto">Social Media Links</h2>
        <div className='flex items-center w-11/12 mx-auto'>
            <div className='w-5/12'>
                <div className='bg-gradient-to-br from-[#80b3ff] to-[#417df1] flex items-center justify-center aspect-[8/5] border-8 border-[#2d72da] rounded-[36px]'>
                    <div className='flex flex-col gap-16'>
                        <div className='flex items-center gap-8'>
                            <div className='w-24 h-24 rounded-full bg-black aspect-square p-4'>
                                <img src={xlogo} alt="" className='w-full'/>
                            </div>
                            <p>Twitter Link</p>
                        </div>
                        <div className='flex items-center gap-8'>
                            <div className='w-24 h-24 rounded-full bg-black aspect-square p-4'>
                                <img src={telegramlogo} alt="" className='w-full'/>
                            </div>
                            <p>Telegram Link</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-7/12'>
                <img src={phonedog} alt="" className='w-full reflection' loading='lazy' />
            </div>


        </div>
        
    </div>
  )
}

export default SocialMediaLinks