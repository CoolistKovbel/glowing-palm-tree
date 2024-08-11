import UpdateSession from "./componets/updarteSession";
import Contact from "./componets/contact";
import Hero from "./componets/hero";
import ContentSection from "./componets/contentsection";
import Image from "next/image";



// Home page 


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-5">
      <Hero />

      {/* <ContentSection /> */}

      <div className="w-full p-4 flex flex-wrap items-start">
        {/* happy images */}
        <div className="w-[250px] h-[250px] relative">
          <Image src="https://placehold.co/200" alt="happy poeple getting saved" fill />
        </div>
      </div>

            {/* Contact compneont */}
            <Contact />

      {/* mailing list */}
      <UpdateSession />
    </main>
  );
}
