import githubIcon from "../assets/icons/github.svg"
import instaIcon from "../assets/icons/instagram.svg"
import twitterIcon from "../assets/icons/twitter.svg"
import mailIcon from "../assets/icons/mail.svg"

type MediaLink = {
  icon: string;
  link: string;
} 

const Card = () => {
  const socials: MediaLink[] = [
    {
      icon: githubIcon,
      link : "https://github.com/fareskebeh"
    },
    {
      icon: twitterIcon,
      link : ""
    },
    {
      icon: instaIcon,
      link : ""
    },
    {
      icon: mailIcon,
      link : "mailto:fares_kebbeh@outlook.com"
    },
  ]

  return (
    <div className="bg-black text-white pt-14 px-8 sm:fixed top-0 h-100 sm:h-auto left-0 bottom-0 right-1/2 flex flex-col justify-center">
      
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-2 sm:space-y-4">
          <p className="font-black text-5xl sm:text-6xl">Fares Kebeh</p>
          <p className="text-2xl font-bold">Full-Stack Engineer</p>
          <p className="text-xl text-neutral-400">I build responsive, performant web and mobile apps</p>
        </div>

        <div className=" flex gap-8">
          {
            socials.map((social,index)=> (
                <a key={index} target="_blank" href={social.link}>
                  <img className="w-10 hover:opacity-80 transition duration-200 invert-90" src={social.icon}/>
                </a>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Card