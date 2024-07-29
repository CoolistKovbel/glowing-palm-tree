import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[500px] flex items-center gap-4 flex-col justify-around md:flex-row ">

    <div className="flex flex-col gap-2 justify-between  md:items-start bg-[#222] md:w-[60%] p-4 rounded-lg h-[320px]">

      <header className="p-4">
        <h2 className="text-2xl capitalize md:text-5xl font-bold mb-2 ">
          Get yourself your very own first aid kit
        </h2>
        <p className="text-sm text-gray-500 md:text-[20px] leading-7">
          On a weekly and or monthly bases with all the essential items needed.
        </p>
      </header>

      <Link
        href="/shop"
        className="bg-[#111] p-2 rounded-lg font-bold text-center text-xl "
      >
        View more
      </Link>
    </div>

    <div className="w-[300px] h-[300px] relative z-[40]">
      <Image
        src="/aidpackfeature1.jpg"
        alt="image bg"
        fill
        className="rounded-full drop-shadow-lg"
      />
    </div>

  </div>
  )
}

export default Hero