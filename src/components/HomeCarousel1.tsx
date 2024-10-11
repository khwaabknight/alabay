import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper as SwiperInstance } from 'swiper';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import image1 from '../assets/swiper1-1.jpg';
import image2 from '../assets/swiper1-2.jpg';
import image3 from '../assets/swiper1-3.jpg';
import image4 from '../assets/swiper1-4.jpg';
import image5 from '../assets/swiper1-5.jpg';
import image6 from '../assets/swiper1-6.jpg';

const getSlidesToSkip = (): number => {
    const width = window.innerWidth;
    if (width < 768) {
      // Mobile
      return 1;
    } else if (width < 1024) {
      // Tablet
      return 2;
    } else {
      // Desktop
      return 3;
    }
};

function HomeCarousel1() {
    const [tab,setTab] = useState<'all' | 'photos' | 'videos'>('all');
    const swiperRef = useRef<SwiperInstance | null>(null); // Create a ref for the Swiper instance

    const nextButtonRef = useRef<HTMLButtonElement | null>(null);
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);

    // Function to handle the next button click
    const handleNext = () => {
        if (swiperRef.current) {
        const slidesToSkip = getSlidesToSkip();
        swiperRef.current.slideTo(swiperRef.current.activeIndex + slidesToSkip); // Skip based on device
        }
    };

    // Function to handle the previous button click
    const handlePrev = () => {
        if (swiperRef.current) {
        const slidesToSkip = getSlidesToSkip();
        swiperRef.current.slideTo(swiperRef.current.activeIndex - slidesToSkip); // Skip based on device
        }
    };
  return (
    <div >
        <div className='w-11/12 mx-auto my-20 flex items-center justify-center gap-10'>
            <button className={`${tab === 'all' ? 'text-theme-orange' : ' text-theme-gray'} uppercase font-montserrat font-black text-4xl`} onClick={() => setTab('all')}>all</button>
            <button className={`${tab === 'photos' ? 'text-theme-orange' : ' text-theme-gray'} uppercase font-montserrat font-black text-4xl`} onClick={() => setTab('photos')}>photos</button>
            <button className={`${tab === 'videos' ? 'text-theme-orange' : ' text-theme-gray'} uppercase font-montserrat font-black text-4xl`} onClick={() => setTab('videos')}>videos</button>
        </div>

        <div className='flex items-center gap-10 w-11/12 mx-auto my-20'>
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
                
                <SwiperSlide className='w-full aspect-[5/3] bg-red-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                    <div>
                        <img src={image1} alt="Photo 1" className='w-full' loading='lazy'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full aspect-[5/3] bg-red-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                    <div>
                        <img src={image2} alt="Photo 2" className='w-full' loading='lazy'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full aspect-[5/3] bg-red-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                    <div>
                        <img src={image3} alt="Photo 3" className='w-full' loading='lazy'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full aspect-[5/3] bg-red-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                    <div>
                        <img src={image4} alt="Photo 4" className='w-full' loading='lazy'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full aspect-[5/3] bg-red-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                    <div> 
                        <img src={image5} alt="Photo 5" className='w-full' loading='lazy'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full aspect-[5/3] bg-red-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                    <div>
                        <img src={image6} alt="Photo 6" className='w-full' loading='lazy'/>
                    </div>
                </SwiperSlide>
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
  )
}

export default HomeCarousel1