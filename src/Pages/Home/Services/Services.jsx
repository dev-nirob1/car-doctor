import { useEffect } from "react";
import { useState } from "react";
import ServicesData from "./ServicesData";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }
        , [])
    console.log(services)
    return (
        <div className="my-10">
            <div className="text-center space-y-5">
                <h3 className="text-orange-600 font-semibold text-xl">Service</h3>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className="w-1/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServicesData key={service._id} service={service} ></ServicesData>)
                }
            </div>
            <div className="text-center my-10">
                <button className="btn btn-warning btn-outline">More Services</button>
            </div>
        </div>
    );
};

export default Services;