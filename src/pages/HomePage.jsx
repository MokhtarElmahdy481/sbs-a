import Accountability from "../assets/Accountability.svg"
import MutualRespect from "../assets/Mutual Respect.svg"
import Integrity from "../assets/Integrity.svg"
import Passion from "../assets/Star.svg"
import Line from "../assets/border.svg"

import Card48 from "../assets/card-48.svg"
import Ibm from "../assets/ibm-1.svg"
import Card45 from "../assets/card-45.svg"
import Ogoldpartnerclr from "../assets/ogoldpartnerclr-1@2x.png"
import Thales from "../assets/thales-logo-1@2x.png"
import Odoovectorlogo from "../assets/odoovectorlogo-1@2x.png"
import Card36 from "../assets/card-36.svg"
import Card39 from "../assets/card-39.svg"




import Vector1 from "../assets/vector-1.svg"
import Image21 from "../assets/image-21@2x.png"
import QNB from "../assets/qnb.svg"
import Albilad from "../assets/albilad.svg"
import Alinmaa from "../assets/alinmaa.svg"
import Hydrocomp from "../assets/hydrocomp-enterprises-1@2x.png"
import Sanad from "../assets/sanad-1@2x.png"
import Arnpondi from "../assets/arnpondi-400x400removebgpreview-1@2x.png"

const SponsersImages = [
  Card48,
  Ibm,
  Card45,
  Ogoldpartnerclr,
  Thales,
  Odoovectorlogo,
  Card36,
  Card39
]
const ClientsImages = [
  Vector1,
  Image21,
  QNB,
  Albilad,
  Alinmaa,
  Hydrocomp,
  Sanad,
  Arnpondi
]



const HomePage = () => {
  return (
    <>
      <div className="container">
        <section className="py-6 flex flex-col md:flex-row justify-between gap-8 text-[#03151F]">
          <div className="w-full flex flex-col gap-4">
            <p className="border-s-2 border-primary text-primary px-2">
              Specialized Business Solutions
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to SBS!
            </p>
            <p>
              SBS is an industry leading professional services solutions. Our aim is to deliver 100% quality product and success your business to achieve ultimate goal.
            </p>
          </div>
          <div className=" w-full bg-[#FAFAFA]  rounded-2xl p-4">
            <p>
              Each of our projects start with the simple question “How will you measure the success of this project?” Success is critical to our team; whether that success comes in the form of happy clients, loyal site users or solid metrics. To help us better understand the challenges of your project we try to establish not only the goals, but also what are your current returns, challenges and the opportunities for growth. Our approach has yielded many successful products and happy customers over the years.
            </p>
          </div>
        </section>
        <div className="w-full">
          <img src={Line} alt="Line" className="w-full my-4" />
        </div>
        <section className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-8 text-[#03151F]">
          <div className=" w-full flex flex-col gap-10 items-center justify-center p-4">
            <div className="bg-primary/30 rounded-full p-3">
              <div className="bg-primary rounded-full flex justify-center items-center w-24 h-24 p-4 ">

                <img src={Accountability} alt="Accountability" className="w-full" />
              </div>
            </div>
            <div className="flex justify-between items-start gap-6 w-full">
              <div className="flex flex-col items-center gap-6">
                <div className="bg-primary/30 rounded-full flex justify-center items-center w-20 h-20 p-4">
                  <img src={MutualRespect} alt="Mutual Respect" className="w-full" />
                </div>
                <p>Mutual Respect</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="bg-primary/30 rounded-full flex justify-center items-center w-20 h-20 p-4">
                  <img src={Integrity} alt="Integrity" className="w-full" />
                </div>
                <p>Integrity</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="bg-primary/30 rounded-full flex justify-center items-center w-20 h-20 p-4">
                  <img src={Passion} alt="Passion" className="w-full" />

                </div>
                <p>Passion</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="border-s-2 border-primary text-primary px-2">
              Our Values
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              SBS values are the cornerstone of how we do business
            </p>
            <p>
              The basis for our guiding principles and the culture of the company. They set the benchmark for minimum expectations and are the driving force behind our clear communication, superior performance, and professional integrity.
            </p>
          </div>

        </section>
      </div>
      <section className="py-6 bg-[#FAFAFA] text-[#03151F]">
        <div className="container flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full flex flex-col gap-4">
            <p className="border-s-2 border-primary text-primary px-2">
              Our Partners
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Trusted by great partners
            </p>
            <p>
              We are proud to work with bold and visionary partners, helping us shape an impressive future led by technical solutions.
            </p>
          </div>
          <div className=" w-full">
            <div className="">
              <Sponsers/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-white text-[#03151F]">
        <div className="container flex flex-col-reverse md:flex-row justify-between gap-8">
        <div className=" w-full">
            <div className="">
              <Clients/>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="border-s-2 border-primary text-primary px-2">
            Our Customers
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Valued Clients
            </p>
            <p>
            SBS values are the cornerstone of how we do business and the basis for our guiding principles and the culture of the company.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default HomePage

const Sponsers = () => {
  return (<ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
{SponsersImages.map((img,i)=> <li key={i} className="bg-white flex justify-center items-center p-4 rounded-xl">
  <img src={img} alt="" className="object-contain" />
</li>)}
  </ul>)
}
const Clients = () => {
  return (<ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
{ClientsImages.map((img,i)=> <li key={i} className="bg-[#FAFAFA] flex justify-center items-center p-4 rounded-xl">
  <img src={img} alt="" className="object-contain " />
</li>)}
  </ul>)
}