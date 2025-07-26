import sword from "../assets/icons/sword.png";
import star from "../assets/icons/star.png";
import reactIcon from "../assets/icons/react.svg";
import pythonIcon from "../assets/icons/python.svg";
import supabaseIcon from "../assets/icons/supabase.svg";
import jsIcon from "../assets/icons/js.svg";
import tsIcon from "../assets/icons/ts.svg";
import djangoIcon from "../assets/icons/django.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import githubIcon from "../assets/icons/github.svg";
import {motion} from "framer-motion"

type Project = {
  name: string;
  description: string;
  technologies: string[];
  startDate: string;
  image: string;
  state: string;
  link: string;
  purpose: string;
};

const Timeline = () => {
  const projects: Project[] = [
    {
      name: "Gold Street",
      description:
        "I built an SaaS for a trading agency, with private channel handling using TelegramAPI",
      technologies: [reactIcon, tailwindIcon, supabaseIcon, pythonIcon],
      startDate: "27-June-2025",
      image: "goldstreet",
      state: "Completed",
      link: "https://github.com/fareskebeh/goldstreet",
      purpose: "prod",
    },
    {
      name: "Tutorme",
      description:
        "I'm currently building the frontend for a tutoring web app, the app contains a chat feature, so far my biggest project",
      technologies: [reactIcon, tailwindIcon, tsIcon],
      startDate: "18-June-2025",
      image: "tutorme",
      state: "In Progress..",
      link: "https://github.com/fareskebeh/tutorme",
      purpose: "prod",
    },
    {
      name: "Rigsy",
      description:
        "My only scalable full-stack app, currently abandoned due to other current overriding projects",
      technologies: [reactIcon, tailwindIcon, djangoIcon],
      startDate: "17-May-2025",
      image: "rigsy",
      state: "Stopped",
      link: "https://github.com/fareskebeh/ecom",
      purpose: "prac",
    },
    {
      name: "Blog app",
      description:
        "My first full-stack app :), a blog app where you can read, comment and share posts, currently missing authentication and proper formatting",
      technologies: [reactIcon, tailwindIcon, djangoIcon],
      startDate: "08-April-2025",
      image: "blog",
      state: "In Progress..",
      link: "https://github.com/fareskebeh/blog-app",
      purpose: "prac",
    },
    {
      name: "Matrix Component",
      description:
        "a lightweight component that displays flickering 0s and 1s, made this project while meddling with JavaScript, you can install it from npm :)",
      technologies: [jsIcon, tailwindIcon],
      startDate: "12-May-2025",
      image: "matrix",
      state: "Completed",
      link: "https://github.com/fareskebeh/matrix-component",
      purpose: "prac",
    },
  ];

  return (
    <div className="text-xl text-neutral-400 space-y-8">
      <div>
        NOTE: The projects denoted by a{" "}
        <img className="inline-block w-10" src={sword} /> icon are practice
        projects, while projects denoted by a{" "}
        <img className="w-8 inline-block" src={star} /> icon are projects for
        external clients
      </div>

      <div className="border-l-4 border-l-neutral-700 pl-4 space-y-4">
        {projects.map((p, index) => (
          <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.4}} className="p-4 space-y-8 backdrop-blur-sm rounded-xl" key={index}>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-white">{p.name}</p>
              <img className="w-10" src={p.purpose === "prod" ? star : sword} />
            </div>
            <p>{p.description}</p>
            <p className={p.state==="Stopped" ? "text-red-400" : p.state==="Completed" ? "text-emerald-400" : "text-amber-300"}>{p.state}</p>
            <div className="flex justify-between flex-col sm:flex-row gap-4 items-start sm:items-center px-2">
              <div className="*:w-15 flex gap-4">
                {p.technologies.map((t, index) => (
                  <img key={index} src={t} />
                ))}
              </div>

              <a
                href={p.link}
                className="p-2 flex text-black bg-white rounded-xl gap-2 font-bold hover:opacity-90 active:opacity-80 transition duration-200"
                target="_blank"
              >
                <img className="w-4" src={githubIcon} />
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
