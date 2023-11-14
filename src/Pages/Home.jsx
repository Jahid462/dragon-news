import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import RightSidebar from "../Components/RightSidebar";

const Home = () => {
    return (
        <div className="space-y-3">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">

                {/* Left Side Content */}
                <div>
                    <LeftSidebar></LeftSidebar>
                </div>

                {/* Middle News Content */}
                <div className="col-span-2">

                </div>

                {/* Right Side Content */}
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;