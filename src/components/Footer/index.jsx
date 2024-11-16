import { useLocation } from "react-router-dom"
import Logo1 from "../../assets/logo-wih-text.png"
import Logo from "../../assets/logo-with-text-2.png"

const Footer = () => {
  const {pathname} = useLocation()
  
  return (
    <div className={`${pathname === '/our-services' ? 'bg-[#FAFAFA] text-[#03151F] ': pathname === '/careers' ? 'bg-[#121212] text-white ' : 'bg-primary text-white '} gap-4 py-8`}>
      <div className="container flex flex-col md:flex-row justify-between items-stretch gap-8">

        <div className="flex flex-col justify-between md:items-start gap-8">
          <div className="w-1/2 md:w-80">
            <img src={pathname === '/our-services' ? Logo1 : Logo} alt="Logo" className="object-contain w-full" />
          </div>
          <div className="">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
            123 smart village St. &#35;22B <br/>Cairo, Egypt 12
            </p>
          </div>
          <div className="w-full flex justify-between gap-4">
            <div className="flex flex-col gap-3">
              <p className="opacity-60">E-mail address</p>
              <p>info@sbs-sa.net</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="opacity-60">Phone no.</p>
              <p>+966 11 211 3300</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start gap-8">
          <div className="">
            <h3 className="font-bold text-lg">Follow us</h3>
            <a rel="noopener noreferrer"  target="_blank" href="https://www.linkedin.com/">
            LinkedIn
            </a>
          </div>
          <div className="w-full">
            <p className="text-sm text-center md:text-start">
            &copy; 2024 SBS - Specialized Business Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer