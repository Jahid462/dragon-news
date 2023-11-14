import Navbar from "../Components/Navbar";

const Error = () => {
    return (
        <div className="p-5" >
            <Navbar></Navbar>
            <div className="space-y-5 flex flex-col justify-center items-center h-[60vh]">
                <h1 className="text-5xl text-red-500 font-bold">OHH...</h1>
                <p className="text-3xl">This is Invalid Page</p>
            </div>
        </div>
    );
};

export default Error;