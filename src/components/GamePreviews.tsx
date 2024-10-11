import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper as SwiperInstance } from 'swiper';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import preview1 from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/Abilities.png';
import preview2 from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/artifacts.png'
import preview3 from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/image 3 alabay guard 2.png'
import preview4 from '../assets/Alabay Games/Alabay Guard/image 1 alabay guard.png'
import preview5 from '../assets/Alabay Games/Alabay Guard/image 2 alabay guard.png'
import preview6 from '../assets/Alabay Games/Alabay Guard/image 3 alabay guard.png'

const data = [
    {
        id: 1,
        image: preview1,
    },
    {
        id: 2,
        image: preview2,
    },
    {
        id: 3,
        image: preview3,
    },
    {
        id: 4,
        image: preview4,
    },
    {
        id: 5,
        image: preview5,
    },
    {
        id: 6,
        image: preview6,
    },
]

function GamePreviews() {
    const swiperRef = useRef<SwiperInstance | null>(null); // Create a ref for the Swiper instance

    const nextButtonRef = useRef<HTMLButtonElement | null>(null);
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);

    // Function to handle the next button click
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
    <div className='mt-24 mb-96 w-11/12 mx-auto'>
        <h2 className="font-montserrat text-6xl font-black uppercase"><span className="text-theme-orange">Game</span> Previews</h2>

        <div>
            <div className='flex items-center gap-10 my-20'>
                <div>
                    <button 
                        ref={prevButtonRef} 
                        onClick={handlePrev} 
                        className='bg-[#353535] py-5 px-2 rounded-2xl shadow-[8px_9px_19px_0px_#000000A6]
                        '
                    >
                        <FaArrowLeft className='text-4xl text-white'/>
                    </button>
                </div>
                <Swiper
                    onInit={(swiper) => {
                    swiperRef.current = swiper; // Store the swiper instance
                    }}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                >
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id} className='w-full flex items-center justify-center rounded-3xl overflow-hidden'>
                                <img src={item.image} alt="" className='w-full' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div>
                    <button 
                        ref={nextButtonRef} 
                        onClick={handleNext} 
                        className='bg-[#353535] py-5 px-2 rounded-2xl shadow-[8px_9px_19px_0px_#000000A6]'
                    >
                        <FaArrowRight className='text-4xl text-white'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GamePreviews