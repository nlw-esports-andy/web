import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'

import logoImage from './assets/logo.svg'

function App() {
  
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage}/>

      <h1 className="text-5xl text-white font-black mt-20">
        Your <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> is here
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game Title</strong>
            <span className="text-sm text-zinc-300 block">x ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game Title</strong>
            <span className="text-sm text-zinc-300 block">x ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game Title</strong>
            <span className="text-sm text-zinc-300 block">x ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game Title</strong>
            <span className="text-sm text-zinc-300 block">x ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game Title</strong>
            <span className="text-sm text-zinc-300 block">x ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game Title</strong>
            <span className="text-sm text-zinc-300 block">x ads</span>
          </div>
        </a>
      </div>

      <div className=" mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex items-center justify-between">
          <div>
            <strong className="text-2xl text-white font-black block">Didn't find a duo?</strong>
            <span className="text-zinc-400">Publish an ad to find new players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size="24" />
            Publish ad
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
