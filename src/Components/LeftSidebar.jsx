import { useEffect, useState } from "react";
import Pic1 from "../assets/1.png"
import Pic2 from "../assets/2.png"
import Pic3 from "../assets/3.png"
import moment from "moment";
import { CiCalendar } from "react-icons/ci";

const LeftSidebar = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className="space-y-3">
            <h1 className="text-2xl font-semibold">All Caterogy</h1>
            <button className="btn btn-error w-full text-white text-lg">National News</button>
            <div className="text-center space-y-3">
                {
                    category.map(result => <p key={result.id} className="text-lg text-[#9F9F9F]">{result.name}</p>)
                }
            </div>
            <div className="space-y-6">
                <div className="space-y-4">
                    <img className="w-full" src={Pic1} alt="Image" />
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Sports</p>
                        <div className="flex gap-3 items-center">
                            <CiCalendar></CiCalendar>
                            <p className="text-[#9F9F9F] font-semibold">
                                {
                                    moment().format("MMM D, YYYY")
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <img className="w-full" src={Pic2} alt="Image" />
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Sports</p>
                        <div className="flex gap-3 items-center">
                            <CiCalendar></CiCalendar>
                            <p className="text-[#9F9F9F] font-semibold">
                                {
                                    moment().format("MMM D, YYYY")
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <img className="w-full" src={Pic3} alt="Image" />
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Sports</p>
                        <div className="flex gap-3 items-center">
                            <CiCalendar></CiCalendar>
                            <p className="text-[#9F9F9F] font-semibold">
                                {
                                    moment().format("MMM D, YYYY")
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;