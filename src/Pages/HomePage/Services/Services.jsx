/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";


const Services = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data);
        });
    },[])
    console.log(services);
    return (
        <div>
            <div>
                <h1 className="lg:text-3xl text-center text-orange-500">Services</h1>
                <h1 className="lg:text-5xl text-xl font-bold text-center">Our Service Area</h1>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8">
                
                {
                    services.map(service=><ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;