import reactIcon from "../assets/icons/react.svg";
import gitIcon from "../assets/icons/git.svg";
import pythonIcon from "../assets/icons/python.svg";
import supabaseIcon from "../assets/icons/supabase.svg";
import jsIcon from "../assets/icons/js.svg";
import tsIcon from "../assets/icons/ts.svg";
import djangoIcon from "../assets/icons/django.svg";
import reduxIcon from "../assets/icons/redux.svg";
import expoIcon from "../assets/icons/expo.svg";
import surgeIcon from "../assets/icons/surge.svg";
import vercelIcon from "../assets/icons/vercel.svg";
import krakenIcon from "../assets/icons/kraken.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import { motion } from "framer-motion";

type Technology = {
  name: string;
  icon: string;
  purpose: string;
  color: string;
};

const Stack = () => {
  const technologies: Technology[] = [
    {
      name: "React",
      icon: reactIcon,
      purpose: "frontend",
      color: "#61DAFB", 
    },
    {
      name: "Expo",
      icon: expoIcon,
      purpose: "frontend",
      color: "#fff", 
    },
    {
      name: "TailwindCSS",
      icon: tailwindIcon,
      purpose: "frontend",
      color: "#38BDF8", 
    },
    {
      name: "Git",
      icon: gitIcon,
      purpose: "cicd",
      color: "#F05032", 
    },
    {
      name: "Python",
      icon: pythonIcon,
      purpose: "backend",
      color: "#3776AB", 
    },
    {
      name: "Supabase",
      icon: supabaseIcon,
      purpose: "backend",
      color: "#3ECF8E", 
    },
    {
      name: "JavaScript",
      icon: jsIcon,
      purpose: "frontend",
      color: "#F7DF1E", 
    },
    {
      name: "TypeScript",
      icon: tsIcon,
      purpose: "frontend",
      color: "#3178C6", 
    },
    {
      name: "Django",
      icon: djangoIcon,
      purpose: "backend",
      color: "#1b6147", 
    },
    {
      name: "Redux",
      icon: reduxIcon,
      purpose: "frontend",
      color: "#9857ff", 
    },
    {
      name: "Surge",
      icon: surgeIcon,
      purpose: "hosting",
      color: "#67c9a4", 
    },
    {
      name: "Vercel",
      icon: vercelIcon,
      purpose: "hosting",
      color: "#FFFFFF", 
    },
    {
      name: "Gitkraken",
      icon: krakenIcon,
      purpose: "cicd",
      color: "#179287", 
    },
  ];

  const frontend: Technology[] = technologies.filter(
    (tech) => tech.purpose === "frontend"
  );
  const backend: Technology[] = technologies.filter(
    (tech) => tech.purpose === "backend"
  );
  const cicd: Technology[] = technologies.filter(
    (tech) => tech.purpose === "cicd"
  );
  const host: Technology[] = technologies.filter(
    (tech) => tech.purpose === "hosting"
  );

  return (
    <div className="backdrop-blur-2xl rounded-2xl p-4 space-y-4 border border-neutral-600">
      <p className="text-xl p-2 tracking-widest rounded-xl">FRONTEND</p>
      <div
        className={`**:cursor-default **:transition duration-300 flex gap-4 flex-wrap`}
      >
        {frontend.map((f, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            style={{backgroundColor: f.color + 20, borderColor: f.color, color: f.color}}
            className={`font-bold border p-2 rounded-4xl backdrop-opacity-20 border-[${f.color}] flex items-center gap-2 text-base`}
          >
            <img className="size-4" src={f.icon} />
            <span>{f.name}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-xl p-2 tracking-widest rounded-xl">BACKEND</p>
      
      <div
        className={`**:cursor-default **:transition duration-300 flex gap-4 flex-wrap`}
      >
        {backend.map((f, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            style={{backgroundColor: f.color + 30, borderColor: f.color, color: f.color}}
            className={`font-bold border p-2 rounded-4xl border-[${f.color}] flex items-center gap-2 text-base`}
          >
            <img className="size-4" src={f.icon} />
            <span>{f.name}</span>
          </motion.div>
        ))}
      </div>


      <p className="text-xl p-2 tracking-widest rounded-xl">CI/CD</p>
       <div
        className={`**:cursor-default **:transition duration-300 flex gap-4 flex-wrap`}
      >
        {cicd.map((f, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            style={{backgroundColor: f.color + 30, borderColor: f.color, color: f.color}}
            className={`font-bold border p-2 rounded-4xl backdrop-opacity-20 border-[${f.color}] flex items-center gap-2 text-base`}
          >
            <img className="size-4" src={f.icon} />
            <span>{f.name}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-xl p-2 tracking-widest rounded-xl">HOSTING</p>
      <div
        className={`**:cursor-default **:transition duration-300 flex gap-4 flex-wrap`}
      >
        {host.map((f, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            style={{backgroundColor: f.color + 30, borderColor: f.color, color: f.color}}
            className={`font-bold border p-2 rounded-4xl backdrop-opacity-20 border-[${f.color}] flex items-center gap-2 text-base`}
          >
            <img className="size-4" src={f.icon} />
            <span>{f.name}</span>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Stack;
