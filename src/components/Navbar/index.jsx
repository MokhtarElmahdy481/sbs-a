import { Link, NavLink } from "react-router-dom"
import { Links } from "../../util/consts"
import Logo from "../../assets/logo.svg"
import Close from "../../assets/close.svg"
import ToggleBtn from "../../assets/navbtn.svg"
import { useState } from "react"
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleOpen = () => {setIsOpen(true)}
    const handleClose = () => {setIsOpen(false)}
    return (
        <>
        <div className="flex justify-between items-center container py-4 md:hidden">
        <button onClick={handleOpen}>
            <img src={ToggleBtn} alt="Toggle Btn" className="" />
        </button>
        <img src={Logo} alt="Logo" className="w-12" />
        <Link to={'register'} className="bg-primary text-white rounded-xl p-2">
        Join Now
        </Link>
        </div>
        <div className={`flex-1 bg-white md:bg-white/40 fixed inset-y-0  w-full md:static transition-all duration-500  ${isOpen ? "left-0 " : "-left-full"}`}>
            <div className="flex justify-between p-4 md:hidden">
                <img src={Logo} alt="Logo" className="w-12" />
                <button onClick={handleClose}>
                    <img src={Close} alt="Close" className="" />
                </button>
            </div>
            <div className="p-1 md:p-0  md:max-w-6xl">
                <ul className="flex justify-between flex-col md:flex-row divide-y md:divide-y-0 md:gap-4">
                    {Links.map((linkItem) => <li key={linkItem.url} className="p-4">
                        <NavLink to={linkItem.url} className={({ isActive }) => isActive ? "font-bold text-primary whitespace-nowrap" : "whitespace-nowrap"}>
                            {linkItem.label}
                        </NavLink>
                    </li>)}
                </ul>
            </div>
        </div>
        </>
    )
}


export default Navbar