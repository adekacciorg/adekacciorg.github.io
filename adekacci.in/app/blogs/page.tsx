import { Lusitana } from "next/font/google";

const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
	<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
	  <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
		<div className="flex flex-col">
		  <Loading />
		  <h2 className="my-12 text-4xl font-semibold text-center text-desert-sand" >
			<span className={lusitana.className}>
			  {"Hold on, We're working on this!"}
			</span>
		  </h2>
		</div>
	  </main>
	</div>
  );
}

function Loading() {
  return (
	<div className="grid grid-cols-3 justify-center mx-auto">
	  <div className="w-8 h-8 flex justify-end items-end">
		<div className="h-4 w-2 rounded-full bg-light-green rotate-135 mr-1 animate-load" />
	  </div>
	  <div className="w-8 h-8 flex justify-center items-center">
		<div className="h-4 w-2 rounded-full bg-light-green animate-load-1" />
	  </div>
	  <div className="w-8 h-8 flex justify-start items-end">
		<div className="h-4 w-2 rounded-full bg-light-green rotate-45 ml-1 animate-load-2" />
	  </div>
	  <div className="w-8 h-8 flex justify-center items-center">
		<div className="h-4 w-2 rounded-full bg-light-green rotate-90 animate-load-7" />
	  </div>
	  <div className="w-8 h-8" />
	  <div className="w-8 h-8 flex justify-center items-center">
		<div className="h-4 w-2 rounded-full bg-light-green rotate-90 animate-load-3" />
	  </div>
	  <div className="w-8 h-8 flex justify-end items-start">
		<div className="h-4 w-2 rounded-full bg-light-green rotate-45 mr-1 animate-load-6" />
	  </div>
	  <div className="w-8 h-8 flex justify-center items-center">
		<div className="h-4 w-2 rounded-full bg-light-green animate-load-5" />
	  </div>
	  <div className="w-8 h-8 flex justify-start items-start">
		<div className="h-4 w-2 rounded-full bg-light-green rotate-135 ml-1 animate-load-4" />
	  </div>
	</div>
  );
}