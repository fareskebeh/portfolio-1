import { Fragment } from "react"
import Stack from "./Stack";

type Section = {
  title: string;
  content: string[];
}

const About = () => {
  const aboutSections:Section[] = [
    {
      title: "Who am I?",
      content: ["I'm a Full-Stack Engineer, CS Student and an electronics enthusiast, I find peace in doing my craft and playing basketball and the piano."]
    },
    {
      title: "What do I do?",
      content: ["I build web apps using React, and native mobile apps using react native.","My focus while building any app is always user experience when it comes to the UI, and maximum API optimization when it comes to the server-side"]
    },
    {
      title: "My Stack",
      content: ["These are the Frontend, Backend, CI/CD, Hosting, and state management technologies that not only am I familiar with, but also I totally CAN ship ANY feature or full scale project with"]
    },
  ] 

  return (
    <div className='flex text-white flex-col gap-4 space-y-4 bg-black'>
      <p className='text-3xl font-bold sticky top-13 bg-black text-white left-0 right-0'>About Me</p>
      
      <div className="px-2 space-y-4">
        {
          aboutSections.map((about,index)=>(
            <Fragment key={index}>
            <p className="text-2xl sticky top-22 bg-black font-bold">{about.title}</p>
            <div className="text-xl">
              {
               

                about.content.map((c,index)=> (
                  <p key={index} className="my-8 text-neutral-400">{c}</p>
                )) 

              
                
               
              }
            </div>
             { index !== aboutSections.length-1 && <hr className="border-neutral-500/20 my-8 w-3/4"/> }
            </Fragment>
          ))
        }
        <Stack/>
      </div>


    </div>
  )
}

export default About