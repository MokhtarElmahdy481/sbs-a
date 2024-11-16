import Header from "../Header"
import BG from "../../assets/home-bg.png"
import BGProducts from "../../assets/our-product.png"
import BGMap from "../../assets/map.png"
import { useLocation } from "react-router-dom";
const Banner = () => {
  const {pathname} = useLocation()
  console.log("location",pathname);
  const productsPath = '/our-products'
  const contactPath = '/contact-us'
  return (
    <div className="relative h-[450px] sm:h-[550px] md:h-[600px]  bg-[#F7F7F7] z-0 overflow-hidden">
      <Header/>
      <div className="container h-full">

      <div className="flex flex-col-reverse md:flex-row h-full z-10">
        <div className="absolute md:right-0 bottom-0 w-2/3 overflow-hidden -z-10">
        <img src={pathname === productsPath ? BGProducts : pathname === contactPath ? BGMap : BG} className="object-contain w-full h-full " alt="BG" />
        </div>
        <div className="flex flex-col md:justify-center items-center md:items-start gap-4 h-full md:max-w-[50%]">
          {(pathname !== productsPath && pathname !== contactPath) && <p className="text-base md:text-lg lg:text-xl">Next level of digital solutions..</p>}
            
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#08A0CD] ">
            {
              pathname === productsPath ? 'FinPay is out there now' : pathname === contactPath ? 
              'Let’s work together': 'Cause we look at the future!'
            }
              </p>
            <p className="text-base md:text-lg lg:text-xl">
              { pathname === productsPath ? 
              'Accept all your business payments anywhere & anytime through your mobile phone with the SoftPOS mobile app, contactlessly, securely, and fast, just as simple as that 👌' :
              pathname === contactPath ? 
              'We got passion to do something interesting.':
              'We Innovate, we deliver, YOU Succeed!'}
            </p>
            { pathname === productsPath ? <div className="flex gap-4">
              <button className="text-base md:text-lg lg:text-xl bg-primary border border-primary text-white rounded-3xl py-2 px-8">Download app</button>
              <button className="text-base md:text-lg lg:text-xl bg-white border border-primary text-primary rounded-3xl py-2 px-8">Download Catalog</button>
            
            
            </div> : 
            pathname === contactPath ? '' :
            <button className="text-base md:text-lg lg:text-xl bg-primary border border-primary text-white rounded-3xl py-2 px-8">Get Started</button>
            
            }
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Banner