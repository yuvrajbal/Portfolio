import React from "react";

export function GridBackgroundDemo() {
  return (
    (<div className="w-fit h-fit bg-zinc-900 bg-grid-zinc-700/[0.2]  relative ">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-inherit  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
        
        <img src="grad_pic-cyan.png" className="w-28 m-10" alt="" />
    </div>)
  );
}
