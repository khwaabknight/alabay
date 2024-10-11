import dogFamily from '../assets/projectVision.png'
import dogRoadMap from '../assets/roadmap.png'

function ProjectVisionAndRoadmap() {
  return (
    <div className='bg-[url("./assets/bgProjectVision.png")] w-full min-h-[200vh] bg-no-repeat bg-center pt-8'>
        <div className='my-24'>
            <h2 className='font-cheeseburga w-11/12 mx-auto text-center huge-font text-theme-orange'>Project Vision</h2>
        </div>
        <div>
            <img src={dogFamily} alt='' className='reflection' loading='lazy'/>
            <p className='font-kumbh text-5xl font-bold w-10/12 mx-auto text-center mt-32'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
        </div>
        <div>
            <h2 className='font-cheeseburga w-11/12 mx-auto huge-font text-white mt-64'>Road map</h2>
        </div>

        <div className='flex w-11/12 mx-auto'>
            <div className='flex flex-col gap-10 w-1/2 pt-72'>
                <p className='font-kumbh text-5xl font-bold text-theme-gray'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</p>
                <p className='font-kumbh text-5xl font-bold text-theme-orange'>Join us as we grow and achieve new heights.</p>
            </div>
            <div className='w-1/2 -mt-20'>
                <img src={dogRoadMap} alt="" className='reflection' loading='lazy'/>
            </div>
        </div>
    </div>
  )
}

export default ProjectVisionAndRoadmap