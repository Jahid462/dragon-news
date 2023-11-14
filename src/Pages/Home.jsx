import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import NewsContainer from "../Components/NewsContainer";
import RightSidebar from "../Components/RightSidebar";

const Home = () => {

    const newses = useLoaderData()

    return (
        <div className="space-y-3">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-8">

                {/* Left Side Content */}
                <div>
                    <LeftSidebar></LeftSidebar>
                </div>

                {/* Middle News Content */}
                <div className="col-span-2 space-y-3">
                    <h1 className="text-2xl font-semibold">Dragon News Home</h1>
                    {
                        newses.map(news=> <NewsContainer key={news._id} news={news}></NewsContainer>)
                    }
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