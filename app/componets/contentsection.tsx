import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContentSection = () => {

  // setup ethers connect
  const addToCartHandle = async () => {
    try {
      console.log("add item to cart")


      // const handle 


    } catch (error) {
      console.log("errir ")
    }
  }


  return (
    <section className="flex flex-col gap-4" id="features">

    <header className="p-10 bg-[#222] text-center">
      <p className="text-xl mb-2">In need of a safety <span className='underline italic'>percaution</span></p>
      <h2 className="text-2xl">
        When it comes to many different scrapes and bruises we got you
        covered
      </h2>
    </header>

    <div className="flex items-center  w-full md:w-[90%] md:h-[700px] mx-auto flex-col md:flex-row bg-[#222] gap-4 p-4">

      <div className="flex flex-col gap-4 text-center justify-around w-fit bg-[#333] p-4 drop-shadow-lg h-[90%] my-auto">

        <h2 className="text-4xl text-center font-bold">First Aid kit</h2>

        <div>

          <div className="w-[200px] h-[200px] relative">
            <Image
              src="/aidpack2.jpg"
              alt="our current basket filled with banddaids, bandages, neosporen, etc"
              fill
            />
          </div>

          <p className="text-xl font-bold bg-[#222] p-2 w-full">
            price: $50
          </p>

          <div className="flex items-center gap-4 flex-col p-4 font-bold">

            <Link href="/cart" className="bg-[#111] p-3 hover:bg-[#333] drop-shadow-lg">
              add to cart
            </Link>

            <Link
              href="/ordernow"
              className="bg-[#111] p-3 hover:bg-[#333] drop-shadow-lg"
            >
              view more
            </Link>
            
          </div>
          
        </div>

      </div>

      <div className=" p-10 bg-[#333] rounded h-[90%] my-auto flex justify-center">

        <div className="flex items-start gap-10 justify-around flex-col h-[50%] my-auto">
          <h2 className="text-6xl capitalize font-bold">The perfect kit use </h2>

          <p className="text-[20px] ">
            Get yourself situated with our tool kit. It comes with the
            essential items needed in order to heal your wounds. From bandages
            to band-aid and asprine and more.
          </p>

          <p className='text-gray-500 text-md font-bold text-center capitalize'>Get yourself a discount if you mint yourself your own nft</p>
        </div>

      </div>

    </div>

  </section>
  )
}

export default ContentSection