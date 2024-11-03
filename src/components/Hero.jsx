import { GridBackgroundDemo } from "./GridBackground";

export default function Hero(){
  return (
    <main >
      <div className="flex gap-10 justify-between flex-col-reverse md:flex-row md:max-w-4xl mx-auto">
      {/* intro */}
      {/* <div className="">
        <h1 className="max-w-3xl text-3xl md:text-5xl font-semibold text-zinc-50 leading-tight">I'm a software engineer who strives on bringing  <span className="text-cyan-500">ideas to life.</span></h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">Meet Yuvraj Bal, a tech enthusiast with a flair for crafting functional, dynamic applications and a deep commitment to continuous learning. My passion for clean, efficient design goes hand in hand with my love for fitness, financial markets, and all things tech. When I’m not working on my latest project, I’m exploring new skills, perfecting my craft, or analyzing trends.</p>
      </div> */}
      <div className="tracking-tight text-lg" >
        <h1 className="text-3xl md:text-5xl text-gray-950 dark:text-zinc-50 tracking-tight font-bold mb-4">Yuvraj Bal</h1>
        <p className=" text-zinc-700 dark:text-zinc-400 mb-5">Crafting digital experiences, <span className="dark:text-zinc-50 font-bold px-2 py-1 bg-gray-100 dark:bg-zinc-700">startups</span> and scaling <span className="dark:text-zinc-50 font-bold">side hustles</span></p>
        <p className=" dark:text-zinc-500 text-zinc-600 leading-normal">Full-stack developer focused on building modern web apps and impactful SaaS solutions. Catch me on <a href=""><span className="dark:text-zinc-400 text-zinc-700 font-bold">twitter</span></a> for tech updates and memes.</p>
        
      </div>
      <div>
        <img src="grad_pic-cyan.png" className="max-w-20 h-auto rounded-md ml-4" alt="" />
      </div>

    </div>
    </main>
  )
}