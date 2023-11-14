import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <div className="space-y-3">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;