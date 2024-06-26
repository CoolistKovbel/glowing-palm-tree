import Image from "next/image";
import Link from "next/link";
import { getSession } from "./lib/action";
import UpdateSession from "./componets/updarteSession";

export default async function Home() {

  const data = [
    {
      title: "hand picked and curriiated",
      description:
        "we had and have our reasons so we hope this best fits you as well",
      image: "/socialmakfea2.avif",
    },
    {
      title: " Need to market a product or design ",
      description:
        "Chat with us and we will be able to discouse the best out come we can provide so your content reaches the right people.",
      image: "/marketingfea1.avif",
    },
    {
      title: " Saftey and security ",
      description:
        " Working with us we understand privicy, we can always have an open or close session depending on your preferences",
      image: "/socialmakfea2.avif",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-5">
      
      <div className="w-full flex items-center gap-4 flex-col justify-around md:flex-row ">
        <div className="flex flex-col gap-2 justify-between  md:items-start bg-[#222] md:w-[50%] p-4 rounded-lg h-[300px]">
          <header className="p-1">
            <h2 className="text-2xl font-bold mb-2 ">
              Get yourself your very own first aid kit
            </h2>
            <p className="text-sm text-gray-500">
              On a weakly on monthly bases with all the essential items needed.
            </p>
          </header>

          <Link
            href="/shop"
            className="bg-[#111] p-2 rounded-lg font-bold text-center "
          >
            View more
          </Link>
        </div>

        <div className="w-[300px] h-[300px] relative">
          <Image
            src="/aidpackfeature1.jpg"
            alt="image bg"
            fill
            className="rounded-full drop-shadow-lg"
          />
        </div>
      </div>

      <section className="flex flex-col gap-4" id="features">
        <header className="p-10 bg-[#222] text-center">
          <p className="text-xl mb-2">In need of a safety percaution</p>
          <h2 className="text-2xl">
            When it comes to many different scrapes and bruisnes we got you
            covered
          </h2>
        </header>

        <div className="flex items-center justify-between w-full md:w-[80%] h-[700px] mx-auto flex-col md:flex-row ">
          <div className="flex flex-col gap-4 text-center items-start w-fit bg-[#222] p-4">
            <h2 className="text-2xl text-center font-bold">First Aid kit</h2>

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

              <div className="flex items-center gap-4 flex-col p-4">
                <Link href="/cart" className="bg-[#111] p-3 hover:bg-[#333]">
                  add to cart
                </Link>
                <Link
                  href="/ordernow"
                  className="bg-[#111] p-3 hover:bg-[#333]"
                >
                  view more
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center flex-col gap-4 p-10">
            <h2 className="text-2xl font-bold">The perfect kit use </h2>

            <p className="text-sm ">
              Get yourself situated with our tool kit. It comes with the
              essential items needed in order to heal your wounds. From bandages
              to band-aid and asprine and more.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#333] p-4">
        <header className="mb-4">
          <h2 className="text-3xl font-bold">Contact US</h2>
          <p className="text-gray-200">
            Need a quote or would like to know how much and how long it will
            take to get your website completed for you, contact us below and we
            will get it in contact with you as soon as possible.
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

      {/* mailing list */}
      <UpdateSession />

    </main>
  );
}
