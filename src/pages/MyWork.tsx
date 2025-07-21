import GitHubCalendar from "react-github-calendar"
import Timeline from "./Timeline"

type Props = {}

const MyWork = (props: Props) => {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold sticky top-10 bg-white left-0 right-0 ">My Work</p>
      <p className="text-xl">Here's a peek at my GitHub contribution history, and below is a timeline of all my projects</p>
      <div className="">
        <GitHubCalendar colorScheme="dark" username="fareskebeh"/>
      </div>
      <Timeline/>
    </div>
  )
}

export default MyWork