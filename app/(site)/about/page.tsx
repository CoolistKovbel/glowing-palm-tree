import React from 'react'

const page = () => {
  return (
    <main className="w-full min-h-screen p-4">
      <header className="w-full p-4 bg-[#222]">
        <h1 className="text-4xl font-bold">About page</h1>
      </header>

      <section className="p-10 bg-[#222] w-full flex flex-col gap-4 ">
        <h2 className="text-2xl md:text-4xl font-bold ">Edeaid</h2>

        <p>
          When in need of emergency and nobody is around we have created a item
          that will be able to allow you to get health. We have a few items that
          we have put together that will allow you to be able to take care of
          those cuts and brusies.
        </p>

        <p>
          When you cant seem to get the right health kit we have setup a few
          health kits that should be able to help you throughout any
          situatation. You are able to get yourself a kit for your cuts and
          brusies. A kit for your health and for when you want to feel well.
        </p>

        <p>
          Stay up to date and join our mailinglist to stay updated for when you
          will be able to get notified for any next updates about the kit.
        </p>
        
      </section>
    </main>
  )
}

export default page