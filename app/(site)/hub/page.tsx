import Image from "next/image";
import React from "react";

const Page = () => {

  

  const recentUploaded = [
    {
      user: "0xfwewef",
      userImage: "/userImage.png",
      itemDescription: " Wonder what captions images agains... ",
      itemImage: "https://picsum.photos/200",
    },
    {
      user: "0xfwewef",
      userImage: "/userImage.png",
      itemDescription: " Wonder what captions images agains... ",
      itemImage: "https://picsum.photos/200",
    },
    {
      user: "0xfwewef",
      userImage: "/userImage.png",
      itemDescription: " Wonder what captions images agains... ",
      itemImage: "https://picsum.photos/200",
    },
  ];

  const mostLiked = [
    {
      user: "0xfwewef",
      userImage: "/userImage.png",
      itemDescription: " Wonder what captions images agains... ",
      itemImage: "https://picsum.photos/200",
      itemLiked: "0",
    },
  ];

  const recentMinted = [
    {
      user: "0xfwewef",
      userImage: "/userImage.png",
      itemDescription: " Wonder what captions images agains... ",
      itemAddress: "0xaa3fe",
      itemImage: "https://picsum.photos/200",
    },
  ];

  return (
    <main className="w-full min-h-screen">

      <section className="p-4">
        <h2 className="text-3xl font-bold mb-2">Recently Uploaded: </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 bg-[#222] p-10 rounded-lg h-[800px] overflow-auto">
          {recentUploaded.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="bg-[#444]  border-2 w-[320px] "
            >
              <header className="p-2 bg-[#222]">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold">{item.user}</h3>
                  <Image
                    src={item.itemImage}
                    alt="profile"
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                </div>

                <p className="text-sm">{item.itemDescription}</p>
              </header>

              <div className="w-[300px] h-[300px] relative mx-auto ">
                <Image src={item.itemImage} alt="profile" fill />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-3xl font-bold mb-2">Recently Minted: </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 bg-[#222] p-10 rounded-lg">
          {recentMinted.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="bg-[#444]  border-2 w-[320px] "
            >
              <header className="p-2 bg-[#222]">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold">{item.user}</h3>
                  <Image
                    src={item.itemImage}
                    alt="profile"
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                </div>

                <p className="text-sm">{item.itemDescription}</p>
              </header>

              <div className="w-[300px] h-[300px] relative mx-auto ">
                <Image src={item.itemImage} alt="profile" fill />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-3xl font-bold mb-2">Most liked: </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 bg-[#222] p-10 rounded-lg">
          {mostLiked.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="bg-[#444]  border-2 w-[320px] "
            >
              <header className="p-2 bg-[#222]">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold">{item.user}</h3>
                  <Image
                    src={item.itemImage}
                    alt="profile"
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                </div>

                <p className="text-sm">{item.itemDescription}</p>
              </header>

              <div className="w-[300px] h-[300px] relative mx-auto ">
                <Image src={item.itemImage} alt="profile" fill />
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
};

export default Page;
