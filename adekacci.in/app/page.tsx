import { Url } from "next/dist/shared/lib/router/router";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center mt-8 justify-items-center p-4 md:p-8 md:mb-[4%] pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="libertinus-mono-regular text-5xl md:text-8xl mt-12 m-4 md:m-8">Adekacc<span className="text-desert-sand dark:text-light-green">i</span></div>
        <main className="flex flex-col gap-[32px] m-4 md:m-8 p-4 md:p-8 items-center sm:items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 md:mt-8">
            <Card
              title="Projects"
              description="You can check out project `downganizer` by clicking this card. We are working on the others."
              href='/projects/downganizer'
            />
            <Card title="Blogs"
              description="We post various blogs on different tech topics. You can check them out or contribute to them."
              href='/blogs'
            />
            <Card title="Collaborate"
              description="If you wish to collaborate with us, you can do it in various ways. Click here to know more."
              href='/collaborate'
            />
            <Card title="About Us"
              description="We are a group of few developers who would love to do something good. Read about us here."
              href='/about'
            />
          </div>
        </main>
      </div>
      <div className="w-full h-px bg-black dark:bg-white mb-4" />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-white">
      </footer>
    </div>
  );
}

function Card({ title, description, href = '/' }: { title?: string, description?: string, href?: Url}) {
  return (
    <Link href={href} >
      <div className="w-88 h-44 rounded-xl p-2 border-black dark:border-white border-1 hover:border-desert-sand dark:hover:border-light-green hover:text-desert-sand dark:hover:text-light-green" >
        <p className="mt-4 mx-8 text-2xl font-semibold">{title}</p>
        <p className="text-black/50 dark:text-white/50 mx-8 my-2" >{description}</p>
      </div>
    </Link>
  );
}