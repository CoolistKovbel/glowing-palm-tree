import ContactRequestForm from "@/app/componets/contact-request-form";

const Page = () => {
  return (
    <main className="w-full min-h-screen">
      
      <header className="w-full p-5">
        <h2 className="text-3xl font-bold">Want to make a request?</h2>
        <p className="text-gray-500">
          Send a message and we will get back to you as soon as we can
        </p>
      </header>

      <ContactRequestForm />
    </main>
  );
};

export default Page;
