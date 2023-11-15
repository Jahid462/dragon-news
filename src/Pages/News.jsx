import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightSidebar from "../Components/RightSidebar";

const News = () => {

    const news = useParams()
    const newses = useLoaderData()
    const newsDetails = newses.find(aNews => aNews._id === news.id)
    const {image_url, title, details} = newsDetails
    console.log(newsDetails);
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-16">
                <div className="col-span-3 space-y-3">
                    <h1 className="text-2xl font-semibold">Dragon News</h1>
                    <div className="border-2 rounded-md p-5 space-y-5">
                        <img className="w-full mx-auto" src={image_url} alt="Image" />
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p>{details}</p>
                        <Link to='/' className="btn btn-error text-white">All news in this category</Link>
                    </div>
                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default News;