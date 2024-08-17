import IconCloud from "../MagicCom/Icon-cloud.tsx";
import React from "react";

const slugs = [
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "reactdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "mongodb",
  "java",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "python",
  "figma",
  "cplusplus", 
  "csharp",      
  "reactjs",       
  "tailwindcss",   
  "reactnative",   
];

function Spin() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Spin;