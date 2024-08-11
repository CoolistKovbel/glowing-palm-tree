import HeaderHub from "@/app/componets/header-hub";
import { getSession } from "@/app/lib/action";
import { Job } from "@/app/models/jobs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const getServerJobRequests = null;
  const isLogged = await getSession()

  const recentlyCompleted = [
    {
      id: crypto.randomUUID(),
      title: "help i fallen and i cant get up",
      description: "i have access to onlymy phone and nobody is reaching  back to me and i dont know who else to call",
      creator: "0x1414f",
      creatorImage: "https://picsum.photos/32",
    },

  ];

  const jobRequests = []




  return (
    <main className="w-full min-h-screen p-5">

      <HeaderHub isLogged={isLogged} serverJobs={jobRequests} />

      <section className="bg-[#555] p-4">

        <header>
          <h2 className="text-4xl font-bold">Ezuaid Requests:</h2>
          <p className="text-sm text-gray-300">
            Get aid or fast relief from our aid force
          </p>
        </header>

        <div className=" ">

          {recentlyCompleted.length > 0 ? (
            <div className="flex flex-col md:flex-row flex-wrap gap-4 p-4 h-[800px] w-full overflow-auto justify-start items-start">
              {recentlyCompleted.map((item) => (
                <div
                  key={crypto.randomUUID()}
                  className="w-[300px] h-[300px] bg-[#222] flex flex-col justify-center items-center gap-4 p-4 rounded-lg"
                >

                  <h2 className="text-2xl">{item.title}</h2>
                  <p className="text-md">{item.description}</p>
                  <Link href={`/hub/requests/${item.id}`}>View more</Link>

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


      </section>

    </main>
  );
};

export default Page;
