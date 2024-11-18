import { div, main } from "framer-motion/client";
import { useState } from "react";

export default function WorkComponent(){
  return(
    <WorkExperience workData={WorkData}/>
  )
}

function WorkExperience({workData}){
  const [workIndex, setWorkIndex]= useState(0)
  
  const ChangeWorkIndex = (index) => {
    setWorkIndex(index)
  }
  return (
    <main className="">
      {/* <h1 className="text-2xl md:text-3xl font-bold text-white mb-20">Work Experience</h1> */}
      <div className="mx-auto max-w-3xl flex flex-col md:flex-row gap-10">
        <div className="flex md:flex-col md:gap-4 group dark:scrollbar-track-zinc-900 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-thumb-zinc-800 overflow-x-auto md:overflow-clip max-w-xl text-sm md:text-base ">  
          <button className={` dark:hover:bg-zinc-700 hover:bg-zinc-50 px-4 py-2 text-zinc-400 md:min-w-28 md:w-full rounded-md flex flex-row justify-center md:justify-start space-x-2 items-center  ${workIndex === 0 ? "dark:bg-zinc-700 bg-zinc-50" : "bg-inherit"}`} onClick={() =>ChangeWorkIndex(0)}>
              <div className="flex gap-1 items-center ">
                <div className="p-1">
                  <img className="w-3 h-2 min-w-3 mt-1 md:mt-0"src="./icons/Tnc-logo.png" alt="tnc" />
                </div>
                TNC
              </div>
              </button>
          <button className={` dark:hover:bg-zinc-700 hover:bg-zinc-50 px-4 py-2 text-zinc-400 md:min-w-28 md:w-full rounded-md flex flex-row justify-center md:justify-start space-x-2 items-center  ${workIndex === 1 ? "dark:bg-zinc-700 bg-zinc-50" : "bg-inherit"}`} onClick={() =>ChangeWorkIndex(1)}>
              <div className="flex gap-1 md:gap-2 items-center  ">
                <div className="rounded-full ">
                  <img className="w-5 h-5  min-w-5 "src="./icons/mcmaster.png" alt="tnc" />
                </div>
                  MacU
              </div>
            </button>
          <button className={`dark:hover:bg-zinc-700 hover:bg-zinc-50 px-4 py-2 text-zinc-400  md:min-w-28 md:w-full rounded-md flex flex-row justify-center md:justify-start space-x-2 items-center  ${workIndex === 2 ? "dark:bg-zinc-700 bg-zinc-50" : "bg-inherit"}`} onClick={() =>ChangeWorkIndex(2)}>
            <div className="flex gap-2 items-center ">
              <div className="dark:bg-zinc-800 rounded-full p-1">
                <svg className="w-3 h-3 dark:fill-white fill-zinc-950"  height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M265.8,171c-3.9-5.7-11.3-8.5-18.1-8.5 h-2.3c-11.3,1.1-21.5,7.3-24.3,19.8c-0.6,2.8-2.3,5.6-5.6,6.2l-31.6-4c-2.3-0.6-5.7-2.2-4.5-6.8c6.8-35.6,37.3-48,66.1-49.7h6.8 c15.8,0,36.2,4.5,49.2,16.4c15.8,14.7,14.1,34.4,14.1,55.9v50.8c0,15.3,6.2,22,12.4,30c1.7,2.8,2.3,6.2-0.6,8.5 c-6.2,5.6-18.1,15.8-24.9,21.5c-2.2,1.7-5.1,1.7-7.9,0.6c-10.7-9-12.4-13-18.6-21.5c-10.7,11.3-19.8,17.5-30.5,20.9 c-6.8,1.7-14.1,2.8-23.1,2.8c-27.1,0-48.6-16.9-48.6-50.3c0-26.5,14.1-44.6,35-53.1c10.7-5.1,23.7-7.3,36.7-9.1 c8.5-1.1,17-1.7,24.3-2.2v-4.5C269.7,186.8,270.3,177.7,265.8,171z M351.3,348.9c-3.3,2.6-6.8,5-10.3,7.1l-0.2,0.1 c-26.7,16.8-61.1,27-91.5,27.7c-0.9,0-1.9,0-2.8,0c-47.8,0-83.4-26.2-115.8-54.4c-1.6-1.3-2.7-3.2-2.7-5.3c0-1.6,0.7-3.2,1.8-4.3 c1.2-1.1,2.7-1.7,4.3-1.7c1.2,0,2.4,0.3,3.6,1c34.6,19.2,68.8,38.7,110.8,38.6c1,0,1.9,0,2.9,0c26.7-0.6,55.5-7.1,83-18.2l0,0 l2.5-1l1.9-0.8c1.3-0.6,2.7-1.2,4.1-1.7c1.2-0.6,2.5-0.9,3.8-0.9c4,0,7.7,3,7.8,7.4C354.8,345,353.4,347.4,351.3,348.9z M367,360.5 c-1.3,1-2.9,1.8-4.7,1.8h-0.1c-1.2,0-2.6-0.4-3.8-1.5c-1.1-1.1-1.7-2.6-1.6-4c0-0.9,0.2-1.7,0.5-2.5c1.2-3.3,3.1-8.2,4.6-13.1 c1.6-4.9,2.7-9.9,2.7-12.6c0-0.7-0.1-1.2-0.1-1.4c0,0-0.1-0.1-0.2-0.1c-0.3-0.1-0.8-0.3-1.5-0.5c-1.4-0.3-3.5-0.5-5.8-0.5 c-3.2,0-7,0.3-10.5,0.7c-4.1,0.6-7.6,0.9-10,1.4h-0.2h-0.2c-0.2,0-0.5,0.1-0.8,0.1c-1.2,0-2.6-0.3-3.8-1.3c-1.2-1-1.9-2.6-1.9-4 c0.1-2.6,1.5-4.3,3.2-5.6c2.8-2,5.7-3.7,9-5v-0.1l2.8-0.9h0.1l4.9-1.6v0.3c4.9-1.1,9.8-1.5,14.2-1.5c6.1,0,11.2,0.7,14.7,2.1 c1.2,0.5,2.3,1,3.4,2.2l0.1,0.2l0.1,0.2c1.1,1.7,1.7,3.7,1.8,6.4l0,0v1.6C383.9,331.4,379.5,349.3,367,360.5z"></path> <path d="M269.7,225.2c-8.5,0-17,0.6-24.3,2.3c-13.6,4-24.3,12.4-24.3,30.5c0,14.1,7.3,23.7,19.8,23.7c1.7,0,3.4-0.6,4.5-0.6 c7.3-1.7,14.1-6.8,18.1-14.7c6.8-11.3,6.2-21.5,6.2-34.5V225.2z"></path> </g> </g></svg>
              </div>
              Amazon
            </div>
            </button>
          <button className={`dark:hover:bg-zinc-700 hover:bg-zinc-50 px-4 py-2 text-zinc-400  md:min-w-28 md:w-full rounded-md flex flex-row justify-center md:justify-start space-x-2 items-center ${workIndex === 3 ? "dark:bg-zinc-700 bg-zinc-50" : "bg-inherit"}`} onClick={() => ChangeWorkIndex(3)}>
            <div className="flex gap-2 items-center ">
                <div className="dark:bg-zinc-800  rounded-full p-1">
                <img className="w-3 h-3 min-w-3" src="./icons/cgi_logo.jpg" alt="cgi" />
                </div>
                CGI
              </div>
          </button>
          <button className={`dark:hover:bg-zinc-700 hover:bg-zinc-50 px-4 py-2 text-zinc-400  md:min-w-28 md:w-full rounded-md flex flex-row justify-center md:justify-start space-x-2 items-center ${workIndex === 4 ? "dark:bg-zinc-700 bg-zinc-50" : "bg-inherit"}`} onClick={() => ChangeWorkIndex(4)}>
          <div className="flex gap-2 items-center ">
            <div className="p-1 dark:bg-zinc-800 rounded-full">
              <svg className="stroke-1 dark:fill-white fill-zinc-950 w-3 h-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><polygon class="a" points="33.614 33.614 42.864 42.864 42.864 5.864 5.864 5.864 15.114 15.114 33.614 15.114 33.614 33.614"></polygon><polygon class="a" points="15.114 33.614 15.114 19.55 5.885 28.778 5.864 42.864 19.949 42.842 29.177 33.614 15.114 33.614"></polygon></g></svg>
            </div>
              AMD
            </div>
            </button>
        </div>

        <div className="dark:text-zinc-400 text-gray-900  flex flex-col gap-3 md:max-w-xl mx-auto ">
          <div className="text-base md:text-2xl dark:text-zinc-100  ">
            {workData[workIndex].title} <span className="text-cyan-500">@ {workData[workIndex].company}</span>
          </div>
          <div className="text-sm tracking-widest">{workData[workIndex].timeline}</div>
          <div className="text-sm tracking-widest">{workData[workIndex].location}</div>

          <div className="text-sm flex flex-col gap-2">
            {workData[workIndex].description.map((description) => (
              <div className="flex gap-2 leading-loose">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  strokeWidth="1.5" className="w-4 h-4 flex-shrink-0 mt-[6px] stroke-cyan-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div >{description}</div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}

const WorkData = [
  {title: "Software Engineer", 
    company:"Tara Nutraceuticals",
    timeline:"June 2024 - Present",
    location:"Remote",
    description:[
      "Designed and optimized an e-commerce platform, enhancing product management and streamlining sales operations",
      "Developed a customer analytics dashboard to track user behavior, sales, and KPIs, empowering data-driven decisions",
      "Integrated inventory analytics for demand forecasting and stock level monitoring, reducing costs and boosting efficiency"
    ]
  },
  {
    title:"Teaching Assistant",
    company: "McMaster University",
    timeline:"Jan 2024 - April 2024",
    location:"Hamilton, ON",
    description:["Provide comprehensive support to students, clarifying engineering economics concepts and assignments",
      "Collaborate closely with professors on administrative tasks, ensuring smooth course operations"

    ]
  }
  ,{ title: "Software Engineering & Operations Intern",
    company:"Amazon",
    timeline: "May 2023 - Aug 2023",
    location: "Toronto, ON",
    description:["Developed a predictive analytics dashboard that improved the first pass yield (FPY) of the linear sorter by 25%, enhancing sorting accuracy and efficiency",
      "Designed a real-time volume prediction algorithm to optimize sorter operations, effectively reducing bottlenecks and increasing throughput",
      "Deployed a custom LiDAR system for outbound trailer volume calculations, achieving an 18% boost in trailer utilization and reducing operational costs by $9,000 daily"
    ]
  },
  { title: "Software Engineering Intern",
    company:"CGI",
    timeline: "Jan 2023 - Apr 2023",
    location: "Toronto, ON",
    description:["Designed a full-stack CMS for retail electronics inventory enhancing data accuracy and operational efficiency",
      " Developed RESTful APIs to enable real-time inventory tracking, streamlining inventory management processes",
      "Integrated cloud deployment solutions, enhancing system reliability, scalability, and ensuring secure data management"
    ]
  },
  { title: "Silicon Design Engineering Intern",
    company:"AMD",
    timeline: "May 2022 - Dec 2022",
    location: "Toronto, ON",
    description:["Automated over 100 testing procedures with Perl and Bash scripts, integrating them with existing CI/CD pipelines to improve testing efficiency",
      "Collaborated with the Design Verification team to enhance testing frameworks for various DUTs using Verilog and UVM , supporting functional simulation and validation",
      "Conducted advanced server stress tests with custom bash scripts and Linux performance tools"
    ]
  }
]