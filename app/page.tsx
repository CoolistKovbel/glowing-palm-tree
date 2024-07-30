import UpdateSession from "./componets/updarteSession";
import Contact from "./componets/contact";
import Hero from "./componets/hero";
import ContentSection from "./componets/contentsection";



// Home page 


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-5">
      <Hero />

      {/* <ContentSection /> */}

      {/* Contact compneont */}
      <Contact />

      {/* happy image */}

      {/* mailing list */}
      <UpdateSession />
    </main>
  );
}
