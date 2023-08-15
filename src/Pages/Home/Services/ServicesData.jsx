import { Link } from "react-router-dom";

const ServicesData = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card space-y-5 p-5 card-compact w-96 bg-base-100 shadow-xl mt-10">
            <figure><img className='border-8 border-white' src={img} alt="Shoes" /></figure>
            <div className=" flex items-center justify-between">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p className="text-orange-600">Price ${price}</p>
                </div>
                <Link to={`/checkout/${_id}`}>
                <button className="btn btn-square text-orange-600 btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesData;