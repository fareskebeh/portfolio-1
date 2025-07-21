import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className=" sm:text-xl fixed top-0 left-0 right-0 flex *:tracking-wider justify-around sm:justify-center sm:gap-40 p-4">
      <Link to="/about">ABOUT ME</Link>
      <Link to="/my-work">MY WORK</Link>
      <Link to="/contact-me">CONTACT ME</Link>
    </div>
  )
}

export default Nav