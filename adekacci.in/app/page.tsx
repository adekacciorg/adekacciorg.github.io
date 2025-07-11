import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center h-[88%] justify-items-center p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className={"libertinus-mono-regular text-8xl mb-0"}>Adekacci.<span className="text-primary">ORG</span></div>
        <main className="flex flex-col gap-[32px] mt-0 items-center sm:items-start">
          <div className="grid grid-cols-2 gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>

      </div>
      <div className="w-full h-px bg-white mb-[2.5%]" />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-white">
      </footer>
    </div>
  );
}

function Card() {
  return (
    <div className="h-42 w-72 rounded-xl border-white border-1 hover:border-primary hover:text-primary" ></div>
  );
}