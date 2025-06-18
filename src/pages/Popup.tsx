import { FaHeart, FaPlay, FaForward, FaBackward  } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

function Popup() {
  return (
    <div className='container flex justify-center items-center h-[80vh] mx-auto p-4 bg-gray-200 shadow-lg rounded-lg'>
        <div className="flex justify-center mt-10">
      <div className="relative w-80 bg-white rounded-lg shadow-lg overflow-visible">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-full p-2 shadow-md flex items-center justify-center">
            <FaHeart className="text-pink-500 text-xl" />
          </div>
        </div>


        <div className="bg-pink-600 rounded-t-lg text-white text-center p-4 ">
          <IoMdClose className='absolute top-1 text-white text-2xl font-semibold right-1'/>
          <div className="font-bold">Morning Belief Affirmation</div>
          <div className="text-sm">Guided meditation</div>
        </div>


        <div className="p-4 text-center">
          <div className="font-semibold mb-2">Focus on your breath and repeat:</div>
          <div className="text-xl font-bold mb-6">
            "I believe in my <br /> infinite potential"
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-pink-500 rounded-full shadow-md flex items-center justify-center">

            </div>
          </div>
          <div className="text-sm text-gray-500">Press play to begin</div>
        </div>

        <div className="px-6 pb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>0:22</span>
            <span>3:00</span>
          </div>
          <div className="w-full h-2 bg-purple-200 rounded-full mb-4">
            <div className="w-1/4 h-2 bg-purple-600 rounded-full"></div>
          </div>
          <div className="flex items-center justify-center gap-6 text-purple-600 text-xl">
            <FaBackward className="cursor-pointer" />
            <div className="w-10 h-10 bg-purple-600 pl-1 text-white rounded-full flex items-center justify-center">
              <FaPlay />
            </div>
            <FaForward className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
        </div>
  )
}

export default Popup