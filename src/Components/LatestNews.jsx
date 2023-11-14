import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex gap-3 bg-gray-100 p-3">
            <button className="btn btn-error text-white">Latest</button>
            <Marquee className="font-semibold text-lg">Match Highlights: Germany vs Spain — as it happened! Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default LatestNews;