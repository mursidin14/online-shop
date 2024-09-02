import ContactBanner from "../components/banners/ContactBanner";
import CardContact from "../components/icons/cards/CardContact";
import LocationIcon from "../assets/icons/location.svg";
import ContactIcon from "../assets/icons/contact.svg";


export default function Contact() {
  return (
    <div className="dark:bg-dark-20 dark:text-white">
        <ContactBanner />
        <div className="relative bottom-28 sm:bottom-32">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center p-5 sm:space-y-0 space-y-5 sm:space-x-5">
              <CardContact 
                src={LocationIcon}
                alt={"location"}
                title={"Location"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. "}
              />
              <CardContact 
                src={ContactIcon}
                alt={"contact"}
                title={"Contact"}
                desc={"T-shirt12@gmail.com"}
                contact={"(021) 12345678"}
              />
          </div>
          <div className="max-w-6xl mx-auto pt-10 space-y-10">
              <h2 className="text-3xl font-bold text-center">Send Message</h2>
              <form className="space-y-5 max-w-3xl mx-auto">
                  <div className="flex justify-between space-x-3">
                      <input className="w-1/2 border p-2 outline-none" placeholder="First name" name="first_name" />
                      <input className="w-1/2 border p-2 outline-none" name="last_name" placeholder="Last name" />
                  </div>
                  <input className="w-full border p-2 outline-none" placeholder="Your email" name="email" />
                  <textarea className="w-full border p-2 outline-none" rows={7} name="meassage" placeholder="Description" />
                  <div className="flex justify-center">
                    <button className="py-2 px-10 bg-gradient-to-b from-blue-30 to-indigo-30 font-bold text-lg text-white">Send</button>
                  </div>
              </form>
          </div>
        </div>
    </div>
  )
}
