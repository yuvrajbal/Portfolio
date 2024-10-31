import WorkComponent from "../components/WorkExperience";
import Hero from "../components/Hero";
import CardHoverProjects from "../components/Projects";
import { GridBackgroundDemo } from "../components/GridBackground";

export default function LandingPage(){
  return (
    <main className="flex flex-col gap-10 md:gap-40  mx-auto ">
      <Hero/>
      <div>
        <h1 className="text-2xl md:text-3xl text-black dark:text-zinc-50 font-bold mb-6 md:mb-24">Work Experience</h1>
        <WorkComponent/>
      </div>
      <div>
        <h1 className=" text-2xl md:text-3xl text-black dark:text-zinc-50 font-bold mb-6 md:mb-10">Projects</h1>
        <CardHoverProjects/>
      </div>
    </main>
  )
}