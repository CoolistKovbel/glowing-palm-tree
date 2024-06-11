import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const data = [
    {
      title: "Create a profile",
      description:
        "Get started by creating your own account and using a web3 wallet to connect to your profile to be able to use functions that require access to a web3 wallet",
      image: "/feature01.webp",
    },
    {
      title: "Get rewards",
      description:
        "Sell your art by using the power of the blockchain to turn your images into erc-721 tokens where you can then sell to others or trade.",
      image: "/featoure02.avif",
    },
    {
      title: "Trade with friends",
      description:
        "Be able to make friends and trade earn a reputation to be the top trader on our site.",
      image: "/nfttrader.avif",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-5">
      <div className="w-full flex items-center gap-4 flex-col md:flex-row">
        <div className="flex flex-col gap-2 items-start ">
          <h1 className="text-2xl font-bold">
            Looking to earn some token for your images
          </h1>
          <p className="text-sm text-gray-500">
            Get started today and get connected to your prefered blockchain.
          </p>

          <Link href="/" className="bg-[#222] p-2 font-bold rounded-lg">
            Get started today ⚜️{" "}
          </Link>
        </div>

        <div className="w-[300px] h-[300px] relative">
          <Image
            src="/hero-img.jpeg"
            alt="image bg"
            fill
            className="rounded-full drop-shadow-lg"
          />
        </div>
      </div>

      <section className="flex flex-col gap-4" id="features">
        {data.map((item) => (
          <article
            key={crypto.randomUUID()}
            className="flex items-center justify-between flex-col md:flex-row  gap-4 p-5 bg-[#222] drop-shadow-lg rounded-lg"
          >
            <header className="md:w-[60%] bg-[#111] p-10">
              <h2 className="text-3xl font-bold capitalize">{item.title}</h2>
              <p className="text-md">{item.description}</p>
            </header>

            <div className="w-[300px] h-[300px] relative">
              <Image
                src={item.image}
                alt="feature of createing a profile"
                fill
              />
            </div>
          </article>
        ))}
      </section>

      <div >
        <header className="mb-4 ">
          <h2 className="text-3xl font-bold">Contact US</h2>
          <p className="text-gray-200">
            Need help or having issue with your acocunt or some features within
            the site. We will get to you back as soon as we can if you contact
            or pm us.
          </p>
        </header>

        <form className="p-4">
          <label htmlFor="email">
            <span className="text-2xl font-bold">Email:</span>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 bg-[#222] w-full mb-4  mt-4"
            />
          </label>
          <label htmlFor="messaage">
            <span className="text-2xl font-bold">Message:</span>
            <textarea
              id="message"
              name="message"
              className="w-full h-[400px] overflow-auto bg-[#222] p-2 resize-none mt-4"
            />
          </label>
          <button className="bg-red-500 p-2 rounded-lg font-bold hover:bg-red-800 mt-4">
            contact
          </button>
        </form>

        <div className="flex items-center justify-around mt-10">
          <Link
            href="http://twitter.com"
            target="_blank"
            className="bg-[#222] p-3 rounded-lg"
          >
            twitter
          </Link>
          <Link
            href="http://twitter.com"
            target="_blank"
            className="bg-[#212] p-3 rounded-lg"
          >
            linkin
          </Link>
          <Link
            href="http://twitter.com"
            target="_blank"
            className="bg-[#210] p-3 rounded-lg"
          >
            slack
          </Link>
        </div>
      </div>

      
      <div className="p-2 bg-[#333] w-full items-center flex-col md:flex-row mx-auto flex justify-around rounded-lg mt-10" id="contact">

        <h2 className="text-2xl font-bold mb-2 uppercase">Get updates</h2>

        <form className="flex items-center gap-4 w-[60%]">

          <label htmlFor="updateEmail" className="w-full">
            <input type="email" id="updateEmail"  name="updateEmail" className="bg-[#222] p-3 bg-[#222] w-[95%] rounded-lg" />
          </label>

          <button className="bg-[#222] p-2 hover:bg-[#111] rounded-lg w-[40%]">update Email</button>

        </form>

      </div>




    </main>
  );
}
