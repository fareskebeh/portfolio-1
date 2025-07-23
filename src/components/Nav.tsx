import { Link, useLocation } from "react-router-dom"

const Nav = () => {
  const location = useLocation()
  return (
    <div className=" bg-black *:hover:opacity-80 *:transition duration-200 fixed top-0 z-999 left-0 right-0 flex *:tracking-wider justify-around sm:justify-center sm:gap-40 p-4">
      <Link className={location.pathname==="/about" ?      "font-bold text-white scale-110" : "text-neutral-500"} to="/about">ABOUT ME</Link>
      <Link className={location.pathname==="/my-work" ?    "font-bold text-white scale-110" : "text-neutral-500"} to="/my-work">MY WORK</Link>
      <Link className={location.pathname==="/contact-me" ? "font-bold text-white scale-110" : "text-neutral-500"} to="/contact-me">CONTACT ME</Link>
    </div>
  )
}

export default Nav