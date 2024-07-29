
import UpdateSession from "./componets/updarteSession";
import Contact from "./componets/contact";
import Hero from "./componets/hero";
import ContentSection from "./componets/contentsection";

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
      <Hero />

      <ContentSection />

      {/* Contact compneont */}
      <Contact />

      {/* happy image */}
      

      {/* mailing list */}
      <UpdateSession />
    </main>
  );
}
