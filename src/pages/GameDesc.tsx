import { useParams } from "react-router-dom";
import { gameData } from "../utils/constants";
import { FaPlay } from "react-icons/fa";
import Scrollbar from "../components/Scrollbar";

function GameDesc() {
  const {id} = useParams();
  if(id === undefined) {
    return <div>
      Not found
    </div>
  }
  const game = gameData.find((game) => game.id == parseInt(id!))

  if(!game) {
    return <div>
      Game Not found
    </div>
  }

  
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover px-40" style={{
      backgroundImage: `url(${game.bgImage})`,
    }}>
      <div className="lg:h-[20vh] pt-10">
        <h1 className="font-baronkuffner text-white medium-font">{game.title}</h1>
        <h2 
          className="font-kumbh text-white text-5xl uppercase"
          style={{color: game.theme}}
        >{game.subtitle}</h2>
      </div>

      <div className="lg:max-h-[75vh]">
        <Scrollbar theme={game.theme}>
          <div className="lg:min-h-[75vh] flex flex-col justify-between">
            <div className="mt-10">
              <p className="font-montserrat font-bold text-2xl w-1/3 text-white">Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.</p>
              <button
                style={{
                  background: game.theme,
                }}
                className="p-3 rounded-full flex items-center mt-16"
                >
                <div className="bg-black p-3 rounded-full">
                  <FaPlay className="text-white"/>
                </div>
                <p className="text-black uppercase px-8 font-bold text-xl">Coming Soon</p>
              </button>
            </div>
            <div className="w-full">
              <h2 className="font-montserrat text-2xl font-black uppercase text-white"><span style={{color: game.theme}}>Game</span> Preview</h2>
              <div className="flex gap-5 flex-wrap lg:min-h-[25vh] my-10">
                {
                  game.previewImages.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt="" className="h-[25vh] w-auto rounded-xl border-white border-2"/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="text-white clear-start py-20 mb-48">
            <h2 className="font-montserrat font-bold text-3xl uppercase mb-16" style={{color: game.theme}}>Features</h2>
            <div className="flex flex-col gap-8 text-xl font-bold w-2/3">
              <p>Explore a variety of landscapes, including <span style={{color: game.theme}}>mountains</span>, <span style={{color: game.theme}}>forests</span>, <span style={{color: game.theme}}>deserts</span>, and <span style={{color: game.theme}}>ancient ruins</span>.</p>
              <p>Use the Alabay's <span style={{color: game.theme}}>abilities</span> to solve <span style={{color: game.theme}}>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.
              </p>
              <p>Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</p>
              <p>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</p>
              <p>Challenge Modes:</p>
              <ul className="list-none">
                <li> - <span style={{color: game.theme}}>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit.</li>
                <li> - <span style={{color: game.theme}}>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game’s world, uncovering all secrets</li>
              </ul>
            </div>
            <div className="flex gap-10">
              <button
                className="p-3 rounded-full flex items-center mt-16 bg-white"
                >
                <div className="bg-black p-3 rounded-full">
                  <FaPlay className="text-white"/>
                </div>
                <p className="text-black uppercase px-8 font-bold text-xl">Coming Soon</p>
              </button>
              <button className="px-16 py-4 rounded-full flex items-center mt-16 border-2 border-white">
                <p className="text-white uppercase font-bold text-xl">Exit</p>
              </button>
            </div>

          </div>
        </Scrollbar>
      </div>




        
    </div>
  )
}

export default GameDesc