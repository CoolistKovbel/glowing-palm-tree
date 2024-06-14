import { SingleJobRequest } from "@/app/lib/action";


const Page = async (props) => {
  const gg:any = await SingleJobRequest(props.params.id);


  return (
    <main className="w-full min-h-screen bg-[#111] flex items-center justify-center">
      <div className="w-[800px] h-[400px] mx-auto bg-[#444] p-10 overflow-auto flex flex-col justify-between">
        <header className="w-full bg-[#222] p-2">
          <h2 className="text-2xl">Title: {gg[0].title}</h2>
          <p className="text-xl">Author: {gg[0].author}</p>
        </header>

        <p className="text-sm bg-[#333] p-2 h-full">
          {gg[0].description}
        </p>

        <footer className="p-4 bg-[#222] flex justify-between gap-3 w-full">
          <p>cost: <span className="p-2 bg-[#111] text-green-500 rounded-lg">{gg[0].reward}</span> </p>
          <p className="bg-[#111] p-2 w-[20%] text-center rounded-lg hover:bg-[#666]">Accapt</p>
        </footer>

      </div>
    </main>
  );
};

export default Page;
