import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className={"libertinus-mono-regular text-8xl m-8"}>Adekacci.<span className="text-primary-green">ORG</span></div>
        <main className="flex flex-col gap-[32px] m-8 p-8 items-center sm:items-start">
          <div className="grid grid-cols-2 gap-8 mt-8">
            <Card
              title="Projects"
              description="The description about the respective card will be passed from here so that we can test out the options we can use in it"
              href='/projects'
            />
            <Card title="Blogs"
              description="The description about the respective card will be passed from here so that we can test out the options we can use in it"
            />
            <Card title="Collaborate"
              description="The description about the respective card will be passed from here so that we can test out the options we can use in it"
            />
            <Card title="About Us"
              description="The description about the respective card will be passed from here so that we can test out the options we can use in it"
              href='/'
            />
          </div>
        </main>
      </div>
      <div className="w-full h-px bg-white mb-[2.5%]" />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-white">
      </footer>
    </div>
  );
}

function Card({ title, description, href = '/' }: { title?: string, description?: string, href?: Url}) {
  return (
    <Link href={href} >
      <div className="w-88 rounded-xl p-2 border-white border-1 hover:border-primary-green hover:text-primary-green" >
        <p className="mt-4 mx-8 text-2xl font-semibold">{title}</p>
        <p className="text-white/50 mx-8 my-2" >{description}</p>
      </div>
    </Link>
  );
}