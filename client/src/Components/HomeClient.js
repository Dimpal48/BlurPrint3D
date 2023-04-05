import React from 'react';
import Slider from "react-slick";


function HomeClient() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className="w-full my-6">
            <div className="w-full flex flex-col items-center justify-center">
                <p className="text-4xl text-center justify-center font-normal capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-48 before:h-1 before:-bottom-2 before:left-20 before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out duration-100 ">
                    Our Awesome Clients
                </p>
                <p className="text-center px-16 py-8 lg:px-56 text-slate-900 leading-relaxed">
                We want every employee and trade partner to feel that they are part of a common good and 
                cohesive team. We help our teams form stronger relationships with trade partners by 
                emphasizing people and teamwork over processes and checklists. 
                </p>
            </div>
            <div className='py-6 px-12'>
                <Slider {...settings}>
                    <div className='px-6'>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40  rounded-full  shadow-inner"
                            src={
                                "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171147553/90450638-client-member-icon-isolated-on-yellow-round-button-abstract-illustration.jpg"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "http://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "https://www.caddman.com/wp-content/uploads/2020/12/caddman_logo.png"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171147553/90450638-client-member-icon-isolated-on-yellow-round-button-abstract-illustration.jpg"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/640px-Wipro_Primary_Logo_Color_RGB.svg.png"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171147553/90450638-client-member-icon-isolated-on-yellow-round-button-abstract-illustration.jpg"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171147553/90450638-client-member-icon-isolated-on-yellow-round-button-abstract-illustration.jpg"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "https://www.caddman.com/wp-content/uploads/2020/12/caddman_logo.png"
                            }
                        />
                    </div>
                    <div>
                        <img
                            className="lg:w-60 lg:h-60 md:w-52 md:h-52 w-40 h-40 rounded-full  shadow-inner"
                            src={
                                "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171147553/90450638-client-member-icon-isolated-on-yellow-round-button-abstract-illustration.jpg"
                            }
                        />
                    </div>
                </Slider>


            </div>

        </div>
    )
}

export default HomeClient