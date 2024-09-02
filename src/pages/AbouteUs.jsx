import AboutBanner from "../components/banners/AboutBanner";
import ProfileImg from "../assets/profile.png";
import OurMissionImg from "../assets/our_mission.png";

export default function AbouteUs() {
  return (
    <div className="dark:bg-dark-20 dark:text-white">
        <AboutBanner />
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center py-10 px-5">
            <div className="w-full sm:w-1/2">
              <div className="space-y-5">
                  <h2 className="text-4xl font-bold">Profile</h2>
                  <p className="text-base text-gray-40 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                  <p className="text-base text-gray-40 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-5">
                <img src={ProfileImg} alt="profile" />
            </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap-reverse justify-between items-center px-5 py-10">
            <div className="w-full sm:w-1/2 mx-auto p-5">
              <img src={OurMissionImg} alt="profile" />
            </div>
            <div className="w-full sm:w-1/2 mx-auto">
              <div className="space-y-5">
                  <h2 className="text-4xl font-bold">Our Mission</h2>
                  <p className="text-base text-gray-40 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                  <p className="text-base text-gray-40 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
