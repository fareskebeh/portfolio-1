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


type Technology = {
    name: string;
    icon: string;
    purpose: string;
    color: string;
}



const Stack = () => {
    const technologies : Technology[] = [
        {
            name: "react",
            icon: reactIcon,
            purpose:"frontend",
            color:""
        },
        {
            name: "expo",
            icon: expoIcon,
            purpose:"frontend",
            color:""
        },
         {
            name: "tailwind",
            icon: tailwindIcon,
            purpose:"frontend",
            color:""
        },
        {
            name: "git",
            icon: gitIcon,
            purpose:"cicd",
            color:""
        },
        {
            name: "python",
            icon: pythonIcon,
            purpose:"backend",
            color:""
        },
        {
            name: "supabase",
            icon: supabaseIcon,
            purpose:"backend",
            color:""
        },
        {
            name: "js",
            icon: jsIcon,
            purpose:"frontend",
            color:""
        },
        {
            name: "ts",
            icon: tsIcon,
            purpose:"frontend",
            color:""
        },
        {
            name: "django",
            icon: djangoIcon,
            purpose:"backend",
            color:""
        },
        {
            name: "redux",
            icon: reduxIcon,
            purpose:"frontend",
            color:""
        },
        {
            name: "surge",
            icon: surgeIcon,
            purpose:"hosting",
            color:""
        },
        {
            name: "vercel",
            icon: vercelIcon,
            purpose:"hosting",
            color:""
        },
        {
            name: "gitkraken",
            icon: krakenIcon,
            purpose:"cicd",
            color:""
        },
    ]

    const frontend: Technology[] = technologies.filter(tech=> tech.purpose === "frontend")
    const backend: Technology[] = technologies.filter(tech=> tech.purpose === "backend")
    const cicd: Technology[] = technologies.filter(tech=> tech.purpose === "cicd")
    const host: Technology[] = technologies.filter(tech=> tech.purpose === "hosting")

  return (
    <div className=" rounded-xl p-4 space-y-4">
        <p>FRONTEND</p>
        <div className="flex gap-4 *:w-25 flex-wrap">
            {frontend.map((f, index)=> (
                <div key={index}>
                    <img src={f.icon}/>
                </div>
            ))}
        </div>
        <p>BACKEND</p>
        <div className="flex gap-4 *:w-30">
            {backend.map((b, index)=> (
                <div key={index}>
                    <img src={b.icon}/>
                </div>
            ))}
        </div>

        <p>CI/CD</p>
        <div className="flex gap-4 *:w-30">
            {cicd.map((c, index)=> (
                <div key={index}>
                    <img src={c.icon}/>
                </div>
            ))}
        </div>

        <p>CI/CD</p>
        <div className="flex gap-4 *:w-30">
            {host.map((h, index)=> (
                <div key={index}>
                    <img src={h.icon}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Stack
