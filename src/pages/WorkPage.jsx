import HeroWork from "../components/HeroWork";
import WorkComponent from "../components/WorkExperience";

export default function WorkPage(){
  return (
    <main className="flex flex-col gap-20">
      <HeroWork/>
      <WorkComponent/>
    </main>
  )
}