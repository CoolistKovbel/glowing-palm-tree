import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {

  const recentlyCompleted = [
    {
      title: "Market Basic blog",
      description: "basic blog  setup with the latest packages",
      creator: "0x1414f",
      creatorImage: "https://picsum.photos/32",
    },
    {
      title: "Market Basic site",
      description: "basic blog  setup with the latest packages",
      creator: "0x1asdasd4f",
      creatorImage: "https://picsum.photos/32",
    },
    {
      title: "Market Basic blog",
      description: "basic blog  setup with the latest packages",
      creator: "0x1414f",
      creatorImage: "https://picsum.photos/32",
    },
    {
      title: "Market Basic site",
      description: "basic blog  setup with the latest packages",
      creator: "0x1asdasd4f",
      creatorImage: "https://picsum.photos/32",
    },
    {
      title: "Market Basic blog",
      description: "basic blog  setup with the latest packages",
      creator: "0x1414f",
      creatorImage: "https://picsum.photos/32",
    },
    {
      title: "Market Basic site",
      description: "basic blog  setup with the latest packages",
      creator: "0x1asdasd4f",
      creatorImage: "https://picsum.photos/32",
    },
  ];



  return (
    <main className="w-full min-h-screen p-5">

      <header className="w-full p-3 bg-[#111] flex flex-col gap-2 ">

        <h2 className="text-2xl md:text-4xl font-bold">Welcome to the DefenMarketing Hub</h2>

        <p className="text-sm text-gray-500">
          Looking to make a request or help some customer handle their marketing request.
        </p>

        <div className="flex items-center justifty-between w-full p-4 gap-4 font-bold">

          <Link href="/request" className="bg-[#444] hover:bg-[#222] p-2">
            Request now
          </Link>

          <span className="bg-[#222] p-2 rounded-lg">handle below 👇🏼</span>

        </div>

      </header>

      <div className="bg-[#555] p-4">

        <header>
          <h2 className="text-4xl font-bold">Recently Completed Sites:</h2>
          <p className="text-sm text-gray-300">
            We can quick create a custom blog, recipe, contact site, etc.
          </p>
        </header>

        <div className=" ">

          {recentlyCompleted.length > 0 ? (
            <div className="flex flex-col md:flex-row flex-wrap gap-4 p-4 h-[800px] w-full overflow-auto justify-center items-center">
              {recentlyCompleted.map((item) => (
                <div
                  key={crypto.randomUUID()}
                  className="w-[300px] h-[300px] bg-[#222] flex flex-col justify-center items-center gap-4 p-4 rounded-lg"
                >

                  <h2 className="text-2xl">{item.title}</h2>
                  <p className="text-md">{item.description}</p>

                  <footer className="flex items-center justify-around w-full">
                    <div className="w-[3rem] h-[3rem] relative">
                      <Image src={item.creatorImage} alt="slow" fill />
                    </div>
                    <p>{item.creator}</p>
                  </footer>

                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 h-[800px] flex items-center justify-center">
              <h2 className="text-4xl text-center">none completed</h2>
            </div>
          )}

        </div>


      </div>

    </main>
  );
};

export default Page;
