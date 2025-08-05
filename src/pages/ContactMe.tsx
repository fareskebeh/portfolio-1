import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"

type Output = {
  message: string;
  error: boolean | undefined;
  loading: boolean
}

const ContactMe = () => {
  const[output,setOutput] = useState<Output>({
    message:"",
    error: undefined,
    loading: false
  })
  const access_key = import.meta.env.VITE_ACCESS_KEY
  const site_key = import.meta.env.VITE_SITE_KEY
  const [token,setToken] = useState<string|null>(null)
  useEffect(()=> {
    console.log(access_key)
  },[])

  const sendMessage = async(e: React.FormEvent)=> {
    e.preventDefault()
    setOutput({...output, loading: true})

    
    const formData = new FormData(e.target as HTMLFormElement)

    formData.append("access_key", access_key)

    if(token) {
      formData.append("g-recaptcha-token", token)
    }
    else {
      setOutput({loading:false, message:"Check the ReCAPTCHA box and try again",error:true})
      return;
    }
    

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await res.json();
      if(data.success) {
        setOutput({loading: false ,message: "Message Sent!", error: false})
      
      }
      else {
        setOutput({loading: false ,message: "An error occurred, try again!",error: true}, )
      }
    }

      catch(err) {
        if(err instanceof Error){
        setOutput({loading: false ,message: err.message, error: true})}
      }
  }

  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold top-14 z-20 sticky bg-[#494949] w-full text-white left-0 right-0">
        Contact Me
      </p>
      <p className="text-xl text-neutral-400">
        Do you like any of my projects, or want me to add value to your team?
        Contact me through the following methods:
      </p>

      <ul className="text-xl text-neutral-400 list-disc pl-8 space-y-2">
        <li>
          Mail me: <a>fares_kebbeh@outlook.com</a>
        </li>
        <li>Reach out to my social media listed in the card</li>
      </ul>

      <p className="text-neutral-400 text-xl">or</p>

      <p className="text-neutral-400 text-xl">
        Send me a message in the box below 👇
      </p>

      <form onSubmit={sendMessage} className=" flex flex-col **:caret-white gap-2 items-stretch">
        <div className="flex flex-col  sm:flex-row gap-2 *:border *:p-2 text-xl *:flex-1">
          <input required name="name" className="border-neutral-800 sm:border-neutral-700 sm:bg-neutral-800/40 bg-neutral-900/60 rounded-xl text-white outline-none backdrop-blur-2xl" placeholder="Your Name..." type="text" />
          <input required name="email" className="border-neutral-800 sm:border-neutral-700 sm:bg-neutral-800/40 bg-neutral-900/60 rounded-xl text-white outline-none backdrop-blur-2xl invalid:border-red-700/50 invalid:bg-red-700/20 transition duration-300" placeholder="Your Email..." type="email" />
        </div>
        <textarea required name="message" placeholder="Your Message..." className="w-full p-2 text-white text-xl h-40 resize-none outline-none border border-neutral-800 sm:border-neutral-700 bg-neutral-900/60 rounded-xl"></textarea>
        <div className="flex flex-col items-start gap-2 mb-12">
        <ReCAPTCHA onChange={(token)=> setToken(token)} theme="dark" sitekey={site_key}/>
        <button type="submit" className={`py-3 px-5 cursor-pointer hover:opacity-80 transition duration-200 bg-white text-xl font-bold rounded-2xl ${output.loading ? "opacity-60 pointer-events-none px-7" : ""}`}>{output.loading ? <div className="loader"/> : "Send"}</button>
         <p className={`${output.message ? "opacity-100" : "opacity-0"} ${output.error ? "text-red-500" : "text-green-500"} transition duration-300`}>{output.message}</p>

        </div>
      </form>
    </div>
  );
};

export default ContactMe;
