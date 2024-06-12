import React from 'react'

const HubHeader = () => {
  return (
    <header className="p-10 flex flex-col bg-[#666]">
    <h1 className="text-4xl font-bold">Hub</h1>
    <p className="text-xl">Collect, view, mint</p>
    <p className="text-xl">Welcome to the place where you can do it all</p>

    <nav className="flex items-center justify-between mt-4">
      <button className="bg-[#222] p-2 rounded-lg font-bold hover:bg-[#333]">
        upload image
      </button>
      <button className="bg-[#222] p-2 rounded-lg font-bold hover:bg-[#333]">
        Mint image
      </button>
    </nav>
  </header>
  )
}

export default HubHeader