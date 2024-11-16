import image from "../assets/unsplash_iJ2IG8ckCpA.png"
const ContactsUs = () => {
  return (
    <section className="container flex flex-col md:flex-row gap-6 py-8">
      
      <div className="w-full flex justify-center md:justify-start">
        <img src={image} alt="" className="object-contain w-96" />
      </div>
      <div className="w-full space-y-4">
        <h2 className="font-bold text-3xl">Get in touch</h2>
        <Input placeholder={'Name'} />
        <Input placeholder={'Email'} />
        <Input placeholder={'Phone number'} />
        <Input placeholder={'Business type'} />
        <button className="text-base md:text-lg lg:text-xl bg-primary border border-primary text-white rounded-3xl py-2 px-8 w-full">Send</button>

      </div>
    </section>
  )
}


const Input = ({placeholder, ...props}) => {
  return (
    <div className="">
      <input
      type="text" name="" id="" placeholder={placeholder} 
      className="outline-none  w-full p-2 border-b border-primary"  
      {...props}
      />
    </div>
  )
}
export default ContactsUs