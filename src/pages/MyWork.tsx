import GitHubCalendar from "react-github-calendar"
import Timeline from "./Timeline"


const MyWork = () => {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold sticky top-14 bg-black text-white left-0 right-0 ">My Work</p>
      <p className="text-xl text-neutral-400">Here's a peek at my GitHub contribution history, and below is a timeline of all my projects</p>
      <div className="bg-black">
        <GitHubCalendar colorScheme="dark" username="fareskebeh"/>
      </div>
      <Timeline/>
    </div>
  )
}

export default MyWork