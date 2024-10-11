import alabayBackground from '../assets/AlabayBackground.png'
import heroSectionbg from '../assets/heroSectionbg.png'
import alabayJump from '../assets/alabayJump.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import HomeCarousel1 from '../components/HomeCarousel1';
import ProjectVisionAndRoadmap from '../components/ProjectVisionAndRoadmap';
import CommunityEtc from '../components/CommunityEtc';
import Tokenomics from '../components/Tokenomics';
import MerchandiseAndGames from '../components/MerchandiseAndGames';
import GamePreviews from '../components/GamePreviews';
import SocialMediaLinks from '../components/SocialMediaLinks';

function Home() {
  return (
    <div>
        <div className="max-h-screen w-screen overflow-hidden fixed inset-0 -z-10">
        <img src={alabayBackground} alt='' className='object-cover w-full h-full' loading='lazy'/>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='relative'>
            <h1 
              className='font-cheeseburga large-font text-center 
              bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-lime-400 to-lime-600 bg-text-shadow'
              data-text='Welcome to Alabay World'
            >Welcome to Alabay World</h1>
          </div>
          <div className='h-full flex items-center justify-center'>
            <div className='bg-slate-800 py-8'>
              <h2 className='font-cheeseburga text-4xl w-11/12 mx-auto text-center text-slate-50'>
                Where the
                <span className='bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-500'> legendary central asian shepherd dog </span>
                meets a new-age adventure.
                <span className='bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-500'> Join us </span>
                in celebrating the
                <span className='bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-500'> strength, loyalty, </span>
                and
                <span className='bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-500'> heritage </span>
                of the alabay breed.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[95vh] bg-transparent'></div>
      <div className='text-6xl font-bold w-11/12 mx-auto rounded-t-[2.5rem] overflow-y-hidden bg-white'>
        <div className='h-[95vh] home-custom-scrollbar overflow-x-hidden relative pb-40'>
          <div>
            <div className='w-full'>
              <img src={heroSectionbg} alt="" className='w-full' loading='lazy'/>
            </div>
            <div className='absolute top-0 left-0 w-full'>
              <div className='py-6'>
                <div className='w-1/12 h-5 bg-[#FFF6A1] mx-auto rounded-full'/>
              </div>
              <div className='w-full flex lg:pt-20 md:pt-10 pt-5'>
                <div className='w-7/12'>
                <img src={alabayJump} alt="" className='reflection' loading='lazy'/>
                </div>
                <div className='w-5/12 text-right pr-20'>
                  <div className='flex flex-col gap-10 mb-16'>
                    <h2 className='font-montserrat font-black medium-font text text-[#F76902D1]'>History Of</h2>
                    <h2 className='font-cheeseburga huge-font text-white'>Alabay</h2>
                  </div>
                  <p className='font-kumbh hero-desc'>
                  The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <HomeCarousel1 />
          <ProjectVisionAndRoadmap />
          <CommunityEtc />
          <Tokenomics />
          <MerchandiseAndGames />
          <GamePreviews />
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  )
}

export default Home