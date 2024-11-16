import Line from "../assets/border-white.svg"

import designsvgrepocom from "../assets/designsvgrepocom-1.svg"
import coding from "../assets/coding-1.svg"
import codingwebsitesvgrepocom from "../assets/codingwebsitesvgrepocom-1.svg"
import sapsvgrepocom1 from "../assets/sapsvgrepocom-1.svg"
import rocketsvgrepocom1 from "../assets/rocketsvgrepocom-1.svg"
import group1 from "../assets/group-1.svg"
import awardstaruisvgrepocom from "../assets/awardstaruisvgrepocom-1.svg"






const Serveces = [
  {title: "UX UI Design" ,icon:designsvgrepocom , desk: "We offer innovative UI & UX design services at SBS. aimed at delivering an excellent finished product in a timely manner. We strive to deliver profoundly engaging mobile and web applications."},
  {title: "Backend Development" ,icon:coding , desk: "Our team of backend developers creates a custom back-end solution quickly and with care to every code piece. By using only cutting-edge technologies and programming languages Java script, Python, Ruby, .Net."},
  {title: "Frontend Development" ,icon:codingwebsitesvgrepocom , desk: "Our team of frontend developers code on responsive sites across multiple browsers, tablets and other internet accessing devices. They are tasked with usability testing of software, We also review feedback throughout the software development lifecycle."},
  {title: "SAP PO/PI Services" ,icon:sapsvgrepocom1 , desk: "We have the technical expertise in SAP process orchestration skills strong hands-on experience in developing custom interfaces with SAP cloud platform integration HCI along with configuring standard content for cloud solutions SFSF, ARABIA, C4C, Concur, Fieldglass."},
  {title: "Outsourcing" ,icon:rocketsvgrepocom1 , desk: "Our outsourcing department is 10+ years professional experience in outsourcing/offshoring focusing on Software and IT positions. Hands-on and extensive experience in all recruitment life cycle phases further to many industries FinTech, Startups and Consultation firms."},
  {title: "Odoo" , desk: "Odoo Migration helps you to suit according to the trend and achieve success most efficiently."},
  {title: "oracle"  , desk: "Scalability and Performance are features like real application clustering and portability make an Oracle database scalable according to the usage. In multiuser database, it is required to control data consistency and concurrency which are contemplated by oracle."},
  {title: "Quality Assurance" ,icon:awardstaruisvgrepocom , desk: "We provide full-cycle QA services to help our customers deliver high-quality software and accelerate release schedules."},
]

const ServicesPage = () => {
  return (
    <div className="bg-primary text-white container py-8">
      <div className="flex flex-col gap-4">
      <p className="border-s-2 border-white  px-2">
              Our Services
            </p>
            <p className="font-bold text-3xl">
            It’s so challenging to find a good team to do great things.<br/> But we can provide you the best one.
            </p>
      </div>
      <div className="space-y-8">

      {Serveces.map((service,index)=> <ServiceItem {...service} num={index+1} key={index} />)}
      </div>
      <div className="w-full">
          <img src={Line} alt="Line" className="w-full my-4" />
        </div>
      <div className="text-center py-8">

      <p>
      Save your precious time and effort spent for finding a solution. Contact us now
      </p>
      </div>
    </div>
  )
}

const ServiceItem = ({num,title,icon,desk}) => {
  return (
  <>
        <div className="w-full">
          <img src={Line} alt="Line" className="w-full my-4" />
        </div>
  <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 font-bold">

    <div className="flex items-center gap-6">
      <p className="text-lg">{num}</p>
      <img src={icon} alt="" className="object-contain" />
      <p className="text-xl">{title}</p>
    </div>
    <div className="">
      <p className="text-lg">{desk}</p>
    </div>
  </div>
  </>
  )
}

export default ServicesPage