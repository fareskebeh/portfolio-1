import GitHubCalendar from "react-github-calendar"
import Timeline from "./Timeline"
import { subMonths, parseISO } from 'date-fns';

type ContribDay = {
  date: string;
  count: number;
  level: number;
}

const MyWork = () => {

  const threeMonthsAgo = subMonths(new Date(), 3);

  const filterContributions = (contributions: ContribDay[]): ContribDay[] => {
    return contributions.filter((day) => {
      const date = parseISO(day.date);
      return date >= threeMonthsAgo;
    });
  };

  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold sticky top-14 z-999 bg-[#494949] text-white left-0 right-0 ">My Work</p>
      <p className="text-xl text-neutral-400">Here's a peek at my latest GitHub contribution history, and below is a timeline of all my projects</p>
      <div className="border border-neutral-600 bg-neutral-700 p-2 rounded-xl *:text-white flex">
        <GitHubCalendar colorScheme="dark" transformData={filterContributions as any} username="fareskebeh"/>
      </div>
      <Timeline/>
    </div>
  )
}

export default MyWork