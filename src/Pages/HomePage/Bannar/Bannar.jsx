

import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Bannar = () => {
    return (
            <div className="carousel w-full h-[400px] lg:h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full h-full rounded-xl" />
                    <div className="absolute  rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-12 space-y-7'>
                            <h1 className='lg:text-6xl text-xl font-semibold lg:font-bold w-1/2'>Affordable Price For Car Servicing</h1>
                            <p className='text-sm lg:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn text-white lg:text-xl m-2 lg:m-5 bg-[#FF3811] btn-outline'>Discover More</button>
                                <button className='btn text-white lg:text-xl m-2 lg:m-5 bg-[#FF3811] btn-outline'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn  btn-circle text-[#FF3811] btn-outline ">❮</a> 
                        <a href="#slide2" className="btn btn-circle text-[#FF3811] btn-outline">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-12 space-y-7'>
                            <h1 className='text-6xl font-bold w-1/2'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn text-white text-xl mr-5 bg-[#FF3811] btn-outline'>Discover More</button>
                                <button className='btn text-white text-xl  bg-[#FF3811] btn-outline'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn  btn-circle text-[#FF3811] btn-outline ">❮</a> 
                        <a href="#slide3" className="btn btn-circle text-[#FF3811] btn-outline">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-12 space-y-7'>
                            <h1 className='text-6xl font-bold w-1/2'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn text-white text-xl mr-5 bg-[#FF3811] btn-outline'>Discover More</button>
                                <button className='btn text-white text-xl  bg-[#FF3811] btn-outline'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn  btn-circle text-[#FF3811] btn-outline ">❮</a> 
                        <a href="#slide4" className="btn btn-circle text-[#FF3811] btn-outline">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-12 space-y-7'>
                            <h1 className='text-6xl font-bold w-1/2'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn text-white text-xl mr-5 bg-[#FF3811] btn-outline'>Discover More</button>
                                <button className='btn text-white text-xl  bg-[#FF3811] btn-outline'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn  btn-circle text-[#FF3811] btn-outline ">❮</a> 
                        <a href="#slide5" className="btn btn-circle text-[#FF3811] btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                <img src={image5} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-12 space-y-7'>
                            <h1 className='text-6xl font-bold w-1/2'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn text-white text-xl mr-5 bg-[#FF3811] btn-outline'>Discover More</button>
                                <button className='btn text-white text-xl  bg-[#FF3811] btn-outline'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn  btn-circle text-[#FF3811] btn-outline ">❮</a> 
                        <a href="#slide6" className="btn btn-circle text-[#FF3811] btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                <img src={image6} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-12 space-y-7'>
                            <h1 className='text-6xl font-bold w-1/2'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn text-white text-xl mr-5 bg-[#FF3811] btn-outline'>Discover More</button>
                                <button className='btn text-white text-xl  bg-[#FF3811] btn-outline'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn  btn-circle text-[#FF3811] btn-outline ">❮</a> 
                        <a href="#slide1" className="btn btn-circle text-[#FF3811] btn-outline">❯</a>
                    </div>
                </div>
             </div>
    );
};

export default Bannar;