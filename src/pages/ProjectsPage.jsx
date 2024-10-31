import CardHoverProjects from "../components/Projects"
export default function ProjectsPage(){
  return (
    <main className="dark:text-zinc-50 text-zinc-950">
      <div className="text-3xl md:text-5xl font-bold ">Projects</div>
      <div className="text-base md:text-lg tracking-normal leading-relaxed font-normal dark:text-zinc-400 text-zinc-700 max-w-2xl mt-5 md:mt-10 mb-6">I’ve developed commercial projects as well as hobby projects. All projects are included here</div>
      <CardHoverProjects/>
    </main>
  )
}