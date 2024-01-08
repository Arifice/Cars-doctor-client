

// eslint-disable-next-line react/prop-types
const ServiceCart = ({service}) => {
    // eslint-disable-next-line react/prop-types
    const {title,img,price}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ml-4 ">
                <h2 className="card-title font-bold text-left text-2xl">{title}</h2>
                <p className="text-xl font-semibold text-orange-500 text-left"> price : {price} $</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
      </div>
    );
};

export default ServiceCart;