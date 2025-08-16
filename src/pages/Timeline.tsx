import sword from "../assets/icons/sword.png";
import star from "../assets/icons/star.png";
import githubIcon from "../assets/icons/github.svg";
import { motion } from "framer-motion";
import goldstreet from "../assets/preview/goldstreet.png";
import tutorme from "../assets/preview/tutorme.png";
import rigsy from "../assets/preview/rigsy.png";
import blog from "../assets/preview/blog.png";

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
        "I built a SaaS for a trading agency, with private channel handling using TelegramAPI",
      technologies: ["React", "TailwindCSS", "Supabase", "Python"],
      startDate: "27-June-2025",
      image: goldstreet,
      state: "Completed",
      link: "https://github.com/fareskebeh/goldstreet",
      purpose: "prod",
    },
    {
      name: "Tutorme",
      description:
        "(Frontend only) A tutor booking platform.",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      startDate: "18-June-2025",
      image: tutorme,
      state: "In Progress..",
      link: "https://github.com/fareskebeh/tutorme",
      purpose: "prod",
    },
    {
      name: "Rigsy",
      description:
        "My only scalable full-stack app, currently abandoned due to other current overriding projects",
      technologies: ["React", "TailwindCSS", "Django"],
      startDate: "17-May-2025",
      image: rigsy,
      state: "Stopped",
      link: "https://github.com/fareskebeh/ecom",
      purpose: "prac",
    },
    {
      name: "Blog app",
      description:
        "My first full-stack app :), a blog app where you can read, comment and share posts, currently missing authentication and proper formatting",
      technologies: ["React", "TailwindCSS", "Django"],
      startDate: "08-April-2025",
      image: blog,
      state: "In Progress..",
      link: "https://github.com/fareskebeh/blog-app",
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

      <div className=" space-y-4">
        {projects.map((p, index) => (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex relative overflow-hidden z-[200] flex-col justify-between p-4 h-100 rounded-xl bg-cover"
            key={index}
          >
            <div
              style={{ backgroundImage: `url(${p.image})` }}
              className="absolute inset-0 -z-[90] bg-contain bg-no-repeat bg-top"
            />
            <div
              className="absolute inset-0 z-[20] bg-gradient-to-b from-transparent to-black "
            />
            <div></div>

            <div className="flex relative z-90 flex-col gap-4">
              <div className="flex flex-col justify-between gap-4">
                <p className="text-2xl font-bold text-white">{p.name}</p>

                <p>{p.description}</p>

                {/*<p className={p.state==="Stopped" ? "text-red-400" : p.state==="Completed" ? "text-emerald-400" : "text-amber-300"}>{p.state}</p>*/}
              </div>

              <div className="flex justify-between sm:flex-row gap-4 items-end">
                <a
                  href={p.link}
                  className="p-2 flex text-black bg-white rounded-xl gap-2 text-nowrap font-bold hover:opacity-90 active:opacity-80 transition duration-200"
                  target="_blank"
                >
                  <img className="w-4" src={githubIcon} />
                  View Code
                </a>
                <img
                  className="w-10"
                  src={p.purpose === "prod" ? star : sword}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
