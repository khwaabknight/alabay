import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper as SwiperInstance } from 'swiper';
import { Navigation } from 'swiper/modules';
import { useRef} from 'react';
import pinkTshirtBg from '../assets/pink tee bck.png';
import pinkTshirt from  '../assets/pink tshirt.png';
import yellowTshirtBg from '../assets/yellow tee bck.png';
import yellowTshirt from '../assets/yellow tshirt.png';
import blackHoodieBg from '../assets/black hoodie bck.png';
import blackHoodie from '../assets/black hoodie.png';
import blueCapBg from '../assets/blue cap bck.png';
import blueCap from '../assets/cap mockup.png'
import game1 from '../assets/Alabay Games/alabay guard prev 2 1.png'
import game2 from '../assets/Alabay Games/alabay lost heritage prev 1.png'
import { Link } from 'react-router-dom';

const merchData = [
  {
    id: 1,
    image: pinkTshirtBg,
    image2: pinkTshirt
  },
  {
    id: 2,
    image: yellowTshirtBg,
    image2: yellowTshirt
  },
  {
    id: 3,
    image: blackHoodieBg,
    image2: blackHoodie
  },
  {
    id: 4,
    image: blueCapBg,
    image2: blueCap
  }
]

const gamesData = [
  {
    id: 1,
    name: 'Alabay Gaurdian',
    image: game1,
    theme: 'bg-[#843AFC]'
  },
  {
    id: 2,
    name: 'Alabay Heritage',
    image: game2,
    theme: 'bg-[#45D689]'
  }
]

function MerchandiseAndGames() {

  const swiperRef = useRef<SwiperInstance | null>(null);
  const swiperRef2 = useRef<SwiperInstance | null>(null);

  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef2 = useRef<HTMLButtonElement | null>(null);
  const prevButtonRef2 = useRef<HTMLButtonElement | null>(null);
  const handleNext = () => {
    if (swiperRef.current) {
    const slidesToSkip = 1;
    swiperRef.current.slideTo(swiperRef.current.activeIndex + slidesToSkip); // Skip based on device
    }
  };

  // Function to handle the previous button click
  const handlePrev = () => {
      if (swiperRef.current) {
      const slidesToSkip = 1;
      swiperRef.current.slideTo(swiperRef.current.activeIndex - slidesToSkip); // Skip based on device
      }
  };
  return (
    <div className='bg-[url("./assets/bg-tokenomics.png")] w-full xl:min-h-[200vh] bg-bottom lg:min-h-[150vh] bg-no-repeat bg-stretch'>
      <div className='mt-32 mb-56'>
        <h2 className='font-cheeseburga w-11/12 mx-auto huge-font text-center text-theme-orange'>Merchandise</h2>
      </div>
      <div className='flex items-center gap-10 w-9/12 mx-auto my-20'>
        <div>
          <button 
            ref={prevButtonRef} 
            onClick={handlePrev} 
            className='bg-white p-2 rounded-full
            '
          >
            <BsArrowLeft className='text-4xl text-theme-gray'/>
          </button>
        </div>
        <Swiper
          onInit={(swiper) => {
          swiperRef.current = swiper; // Store the swiper instance
          }}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay: 1000,disableOnInteraction: false}}
          loop
        >
          {
            merchData.map((item) => (
              <SwiperSlide key={item.id} className='w-full bg-red-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                <div style={{backgroundImage: `url(${item.image})`}} className='bg-contain'>
                  <img src={item.image2} alt="" loading='lazy'/>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div>
          <button 
            ref={nextButtonRef} 
            onClick={handleNext} 
            className='bg-white p-2 rounded-full'
          >
            <BsArrowRight className='text-4xl text-theme-gray'/>
          </button>
        </div>
      </div>

      <div className='mt-56 mb-32'>
        <h2 className='font-cheeseburga w-11/12 mx-auto huge-font text-center text-white'>Games</h2>
        <p className='font-montserrat w-11/12 mx-auto text-center text-6xl text-theme-gray'>Stay tuned for upcoming games !</p>
      </div>
      <div className='w-10/12 mx-auto flex items-center gap-10'>
        <div>
          <button 
            ref={prevButtonRef2} 
            onClick={handlePrev} 
            className='bg-[#353535] py-5 px-2 rounded-2xl shadow-[8px_9px_19px_0px_#000000A6]
            '
          >
            <FaArrowLeft className='text-4xl text-white'/>
          </button>
        </div>
        <Swiper
          onInit={(swiper) => {
            swiperRef2.current = swiper; // Store the swiper instance
          }}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay: 1000,disableOnInteraction: false}}
          loop
        >
          {
            gamesData.map((item) => (
              <SwiperSlide key={item.id} className='w-full flex items-center justify-center overflow-hidden'>
                <div className='border-white border-8 rounded-[30px] relative'>
                  <img src={item.image} alt="" className='rounded-[26px]'/>
                  <Link to={`/game/${item.id}`} className={`${item.theme} absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-2 px-12 py-5 rounded-full shadow-lg shadow-theme-gray`}>
                    <p className='font-montserrat text-4xl text-white uppercase'>Discover</p>
                    <BsArrowRight className='text-4xl text-white'/>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div>
          <button 
            ref={nextButtonRef2} 
            onClick={handleNext} 
            className='bg-[#353535] py-5 px-2 rounded-2xl shadow-[8px_9px_19px_0px_#000000A6]'
          >
            <FaArrowRight className='text-4xl text-white'/>
          </button>
        </div>

      </div>


    </div>
  )
}

export default MerchandiseAndGames