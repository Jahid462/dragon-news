import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone1 from "../assets/qZone1.png"
import QZone2 from "../assets/qZone2.png"
import QZone3 from "../assets/qZone3.png"

const RightSidebar = () => {
    return (
        <div className="space-y-12">

            {/* Login With Third Party */}
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">Login With</h1>
                <div className="space-y-3">
                    <button className="btn btn-outline w-full"><FaGoogle></FaGoogle>Login with Google</button>
                    <button className="btn btn-outline w-full"><FaGithub></FaGithub>Login with Github</button>
                </div>
            </div>

            {/* Login With Social Media */}
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">Login With</h1>
                <div className="border-2 rounded-md">
                    <p className="flex items-center gap-2 p-3 border-b-2"><FaFacebook className="text-xl"></FaFacebook>Facebook</p>
                    <p className="flex items-center gap-2 p-3 border-b-2"><FaTwitter className="text-xl"></FaTwitter>Twitter</p>
                    <p className="flex items-center gap-2 p-3"><FaInstagram className="text-xl"></FaInstagram>Instagram</p>
                </div>
            </div>

            {/* Kids Zone */}
            <div className="bg-gray-100 p-5 rounded-md">
                <h1 className="text-2xl font-semibold">Q-Zone</h1>
                <div className="space-y-5">
                    <img className="w-full" src={QZone1} alt="Image" />
                    <img className="w-full" src={QZone2} alt="Image" />
                    <img className="w-full" src={QZone3} alt="Image" />
                </div>
            </div>

            <div className="bg-purple-950 text-center px-10 py-16 space-y-5">
                <h1 className="text-white text-3xl font-bold">Create an Amazing Newspaper</h1>
                <p className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-error text-white">Learn More</button>
            </div>
        </div>
    );
};

export default RightSidebar;