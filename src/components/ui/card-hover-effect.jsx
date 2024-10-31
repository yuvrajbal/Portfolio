import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {Link} from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ", className)}>
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group  block h-fit w-full p-2  "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full dark:bg-zinc-800 bg-zinc-50 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <img src={item.imageUrl} alt="project" className="w-full" />
            <div className="group mx-4 mt-8 mb-4"> 
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="flex gap-5 mt-8">
                {item.frameWorkIcons.map((icon,iconIdx) => (
                  icon
                ))}
              </div>

              <div className="mt-5 flex gap-2 text-neutral-500 dark:group-hover:text-sky-500 group-hover:text-cyan-500 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-5 h-5 stroke-neutral-500 group-hover:stroke-sky-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <div className="text-sm"> View Source </div>

              </div>
            </div>
      
          </Card>
        </Link>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden dark:bg-zinc-800 bg-zinc-50 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 p",
        className
      )}>
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("dark:text-zinc-100 text-gray-900  font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn(" mt-8 dark:text-zinc-400 text-zinc-900 tracking-wide leading-relaxed text-sm max-w-fit", className)}>
      {children}
    </p>)
  );
};
