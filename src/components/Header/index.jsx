import Navbar from "../Navbar"
import Logo from "../../assets/logo-wih-text.png"
import { useState } from "react"
const Header = () => {
  return (
    <div className="text-[#212122] z-10">
      <div className="container hidden md:flex justify-between gap-8 py-4">
        <img src={Logo} alt="logo" />
        <div className="flex flex-1 justify-end gap-12">
          <div className="flex flex-col gap-3">
            <p className="opacity-60">E-mail address</p>
            <p>info@sbs-sa.net</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="opacity-60">Phone no.</p>
            <p>+966 11 211 3300</p>
          </div>
        </div>
          <div className="flex flex-col justify-center">

            <LangDropdown />
          </div>
      </div>
      <Navbar />
    </div>
  )
}


const LangDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => { setIsOpen(!isOpen) }

  return (

    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={handleToggle}
        className="text-white bg-primary font-medium rounded-xl text-sm py-1 px-5 text-center inline-flex justify-between items-center"
        type="button"
      >
        English
        <svg
          className={`w-2.5 h-2.5 ms-3 transition-all duration-500 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`z-10 ${isOpen ? "" : "hidden"} absolute top-full bg-white divide-y divide-gray-100 rounded-xl shadow w-44 `}
      >
        <ul
          className="py-2 text-sm text-primary"
        >
          <li className="block px-4 py-2">
            Arabic
          </li>
          <li className="block px-4 py-2">
            English
          </li>

        </ul>
      </div>
    </div>

  )
}

export default Header