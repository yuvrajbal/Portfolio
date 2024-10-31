import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
export default function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home") 

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ?  JSON.parse(savedMode) : true
  })

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light")
    }
  },[darkMode]);

  const toggleMode =() => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode)
  }
  
  return(
    <nav className="bg-white dark:bg-zinc-900  bg-opacity-100 flex justify-between max-w-5xl mx-auto sticky top-0  z-50  py-6 " >

      {/* <div className="hidden lg:flex text-sm font-normal  gap-8 bg-zinc-800 border border-zinc-700/60 items-center px-4 py-2 rounded-2xl  text-zinc-50">
        <a href="/" >
          <div className="flex gap-2 items-center">
            <img src="./grad_pic.png" alt="yuvraj bal" className="w-8 h-8 rounded-full" />
            <div className=" font-semibold">Yuvraj Bal</div> 
          </div>
        </a>
        <a href="/" className="hover:bg-zinc-700 px-2 py-2 rounded-lg">
          <span className="px-2 py-2 ">About</span>
        </a>
        <a href="/projects" className="hover:bg-zinc-700 px-2 py-2 rounded-lg"> <span className="px-2 py-2">Projects</span></a>
        <a href="/work" className="hover:bg-zinc-700 px-2 py-2 rounded-lg"><span className="px-2 py-2">Work</span></a>

      </div> */}

      <div className="  flex justify-between items-center text-zinc-50 text-sm w-full ">
        
        <button onClick={toggleMode} className="shadow-lg px-3 py-2 rounded-2xl shadow-zinc-800/5 ring-[0.8px] ring-zinc-900/5 backdrop-blur bg-white dark:bg-inherit dark:shadow-none dark:ring-cyan-500/10 dark:hover:ring-zinc-500/5">
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 stroke-cyan-500 fill-cyan-500  ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="size-5 fill-zinc-950">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
          )}
        
        </button>
      
        <div className="group bg-white/90 rounded-full text-sm font-medium text-zinc-800 shadow-lg dark:shadow-none px-3  shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 flex gap-2 py-0">
          
          <NavLink to="/" className ={({isActive}) => `${isActive ? "text-cyan-500" :"text-gray-600 dark:text-gray-50"}    px-2 py-2 rounded-lg`}> <span >Home</span></NavLink>
          <NavLink to="/projects" className = {({isActive}) => `${isActive ? "text-cyan-500" : "text-gray-600 dark:text-gray-50"}    px-2 py-2 rounded-lg  `}> <span>Projects</span></NavLink>
        </div>
       

        
      
      </div>

      {/* <a className="hidden lg:inline-flex items-center font-normal text-sm px-4 py-2 text-zinc-50 bg-gradient-to-b from-[#464d55] to-[#25292e] shadow-lg transition duration-150 rounded-lg hover:opacity-80 active:outline-none hover:shadow-md">Download CV</a> */}


    </nav>
  )
}