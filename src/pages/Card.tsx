import githubIcon from "../assets/icons/github.svg";
import instaIcon from "../assets/icons/instagram.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import mailIcon from "../assets/icons/mail.svg";
import TextType from "../bits/TextType";
import { motion } from "framer-motion";
import SplitText from "../bits/SplitText";

type MediaLink = {
  icon: string;
  link: string;
};

const Card = () => {

  const socialCont = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

  const socials: MediaLink[] = [
    {
      icon: githubIcon,
      link: "https://github.com/fareskebeh",
    },
    {
      icon: twitterIcon,
      link: "",
    },
    {
      icon: instaIcon,
      link: "",
    },
    {
      icon: mailIcon,
      link: "mailto:fares_kebbeh@outlook.com",
    },
  ];

  return (
    <div className=" text-white pt-14 px-8 sm:fixed top-0 h-100 sm:h-auto left-0 bottom-0 right-1/2 flex flex-col justify-center">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-2 sm:space-y-4">
          <SplitText text="Fares Kebbeh"
            className="text-4xl sm:text-5xl md:text-6xl font-black text-left"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-2xl font-bold">Full-Stack Engineer</p>
          <TextType
            text={[
              "Code should feel like a conversation, not a puzzle",
              "Sometimes it's about elegance, sometimes just grit",
              "I've broken things more times than I'd like to admit",
              "But that's how you learn what truly matters",
              "Simplicity, clarity, and care, that's the goal",
            ]}
            typingSpeed={30}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-xl text-neutral-400 w-[75%]"
          />
        </div>

        <motion.div variants={socialCont} initial="hidden" animate="show" className=" flex gap-8">
          {socials.map((social, index) => (
            <motion.a variants={item} key={index} target="_blank" href={social.link}>
              <img
                className="w-10 hover:opacity-80 transition duration-200 invert-90"
                src={social.icon}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
