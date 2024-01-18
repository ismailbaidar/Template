import "../assets/styles/navbar.css"
export default function Navbar() {
  return (
    <nav className="shadow-md w-screen flex align-center text-white overflow-hidden justify-between">
      <span className="text-black p-[1.75rem]">LOGO</span>
      <ul className=" p-4 p-[1.75rem] before:bg-gradient-to-r from-sky-500 to-indigo-500 nav-links flex gap-3">
        <li className="nav-link transition linear hover:text-red-700 cursor-pointer">
          route
        </li>
        <li className="nav-link transition linear hover:text-red-700 cursor-pointer">
          route
        </li>
        <li className="nav-link transition linear hover:text-red-700 cursor-pointer">
          route
        </li>
        <li className="nav-link transition linear hover:text-red-700 cursor-pointer">
          route
        </li>
      </ul>
    </nav>
  )
}
