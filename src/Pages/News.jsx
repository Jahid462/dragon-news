import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightSidebar from "../Components/RightSidebar";

const News = () => {

    const news = useParams()
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-2xl font-semibold">Dragon News</h1>
                    {news.id}
                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default News;