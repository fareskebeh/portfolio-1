import reactIcon from "../assets/icons/react.svg"
import gitIcon from "../assets/icons/git.svg"
import pythonIcon from "../assets/icons/python.svg"
import supabaseIcon from "../assets/icons/supabase.svg"
import jsIcon from "../assets/icons/js.svg"
import tsIcon from "../assets/icons/ts.svg"
import djangoIcon from "../assets/icons/django.svg"
import reduxIcon from "../assets/icons/redux.svg"
import expoIcon from "../assets/icons/expo.svg"
import surgeIcon from "../assets/icons/surge.svg"
import vercelIcon from "../assets/icons/vercel.svg"
import krakenIcon from "../assets/icons/kraken.svg"
import tailwindIcon from "../assets/icons/tailwind.svg"
import {motion} from "framer-motion"


type Technology = {
    name: string;
    icon: string;
    purpose: string;
}



const Stack = () => {
    const technologies : Technology[] = [
        {
            name: "React",
            icon: reactIcon,
            purpose:"frontend",
        },
        {
            name: "Expo",
            icon: expoIcon,
            purpose:"frontend",
        },
         {
            name: "TailwindCSS",
            icon: tailwindIcon,
            purpose:"frontend",
        },
        {
            name: "Git",
            icon: gitIcon,
            purpose:"cicd",
        },
        {
            name: "Python",
            icon: pythonIcon,
            purpose:"backend",
        },
        {
            name: "Supabase",
            icon: supabaseIcon,
            purpose:"backend",
        },
        {
            name: "JavaScript",
            icon: jsIcon,
            purpose:"frontend",
        },
        {
            name: "TypeScript",
            icon: tsIcon,
            purpose:"frontend",
        },
        {
            name: "Django",
            icon: djangoIcon,
            purpose:"backend",
        },
        {
            name: "Redux",
            icon: reduxIcon,
            purpose:"frontend",
        },
        {
            name: "Surge",
            icon: surgeIcon,
            purpose:"hosting",
        },
        {
            name: "Vercel",
            icon: vercelIcon,
            purpose:"hosting",
        },
        {
            name: "Gitkraken",
            icon: krakenIcon,
            purpose:"cicd",
        },
    ]

    const frontend: Technology[] = technologies.filter(tech=> tech.purpose === "frontend")
    const backend: Technology[] = technologies.filter(tech=> tech.purpose === "backend")
    const cicd: Technology[] = technologies.filter(tech=> tech.purpose === "cicd")
    const host: Technology[] = technologies.filter(tech=> tech.purpose === "hosting")

  return (
    <div className="bg-neutral-950 rounded-2xl p-4 space-y-4">
        <p className="text-xl bg-neutral-900 p-2 rounded-xl">FRONTEND</p>
        <div className={`*:cursor-pointer **:transition duration-300 hover:bg flex gap-4 *:w-25 flex-wrap`}>
            {frontend.map((f, index)=> (
                <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} className="group hover:-translate-y-1" key={index}>
                    <img src={f.icon}/>
                    <p className="group-hover:animate-pulse opacity-0 group-hover:translate-y-1 group-hover:opacity-100 text-center">{f.name}</p>
                </motion.div>
            ))}
        </div>

        <p className="text-xl bg-neutral-900 p-2 rounded-xl">BACKEND</p>
        <div className={`*:cursor-pointer **:transition duration-200 hover:bg flex gap-4 *:w-25 flex-wrap`}>
            {backend.map((b, index)=> (
                 <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} className="group hover:-translate-y-1" key={index}>
                    <img src={b.icon}/>
                    <p className="group-hover:animate-pulse opacity-0 group-hover:translate-y-1 group-hover:opacity-100 text-center">{b.name}</p>
                </motion.div>
            ))}
        </div>

        <p className="text-xl bg-neutral-900 p-2 rounded-xl">CI/CD</p>
        <div className={`*:cursor-pointer **:transition duration-200 hover:bg flex gap-4 *:w-25 flex-wrap`}>
            {cicd.map((c, index)=> (
                 <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} className="group hover:-translate-y-1" key={index}>
                    <img src={c.icon}/>
                    <p className="group-hover:animate-pulse opacity-0 group-hover:translate-y-1 group-hover:opacity-100 text-center">{c.name}</p>
                </motion.div>
            ))}
        </div>

        <p className="text-xl bg-neutral-900 p-2 rounded-xl">HOSTING</p>
        <div className={`*:cursor-pointer **:transition duration-200 hover:bg flex gap-4 *:w-25 flex-wrap`}>
            {host.map((h, index)=> (
                 <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} className="group hover:-translate-y-1" key={index}>
                    <img src={h.icon}/>
                    <p className="group-hover:animate-pulse opacity-0 group-hover:translate-y-1 group-hover:opacity-100 text-center">{h.name}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Stack
