import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsContainer = ({ news }) => {

    const { _id, author, image_url, title, details } = news

    return (
        <div>
            <div className="mb-10">

                {/* Author Info */}
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-md">
                    <div className="flex gap-3 items-center">
                        <div>
                            <img className="w-12 rounded-full mx-auto" src={author.img} alt="Author Image" />
                        </div>
                        <div>
                            <h3>{author.name}</h3>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xl">
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>

                {/* News Details */}
                <div className="space-y-3 border-2 border-t-0 p-4">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <img className="w-full" src={image_url} alt="News Image" />
                    <p className="text-[#706F6F]">
                        {
                            details.length > 200 ?
                            <span>
                                {details.slice(0, 200)}
                                <Link to={`/news/${_id}`} className="pl-3 text-red-500 font-bold">Read More...</Link>
                            </span>
                            :
                            <span>{details}</span>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsContainer;

NewsContainer.propTypes = {
    news:PropTypes.object
}