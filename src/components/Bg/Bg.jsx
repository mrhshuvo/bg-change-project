import { useState } from "react"


const Bg = () => {
    const [color,setColor] = useState("#777");


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
            <div className="flex flex-wrap justify-center gap-3 bg-white px-4 py-3 rounded-3xl">
                <button onClick={()=> setColor("Red")} className="bg-red-600 px-5 py-1 rounded-2xl text-white shadow-2xl">Red</button>
                <button onClick={()=> setColor("Green")} className="bg-green-900 px-5 rounded-2xl py-1 text-white shadow-2xl">Green</button>
                <button onClick={()=> setColor("Yellow")} className="bg-yellow-300 px-5 rounded-2xl py-1 text-black shadow-2xl">Yellow</button>
                <button onClick={()=> setColor("Blue")}  className="bg-blue-800 px-5 rounded-2xl py-1 text-white shadow-2xl">Blue</button>
                <button onClick={()=> setColor("Orange")} className="bg-orange-500 px-5 rounded-2xl py-1 text-white shadow-2xl">Orange</button>
                <button onClick={()=> setColor("Purple")} className="bg-purple-400 px-5 rounded-2xl py-1 text-white shadow-2xl">Purple</button>
            </div>
        </div>
    </div>
  )
}

export default Bg