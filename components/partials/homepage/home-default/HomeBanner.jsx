import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import Link from 'next/link';

class HomeBanner extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <div className="ps-shop-banner">
                        <Slider {...carouselSetting} className="ps-carousel">
                            <div className="ps-banner">

                                {/*<Link href="/shop">*/}
                                    <a>
                                        <img
                                            src="/static/img/slider/home-1/slide-1.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                {/*</Link>*/}
                            </div>
                            <div className="ps-banner">
                                {/*<Link href="/shop">*/}
                                    <a>
                                        <img
                                            src="/static/img/slider/home-1/slide-2.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                {/*</Link>*/}
                            </div>
                            <div className="ps-banner">
                                {/*<Link href="/shop">*/}
                                    <a>
                                        <img
                                            src="/static/img/slider/home-1/slide-3.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                {/*</Link>*/}
                            </div>
                        </Slider>

            </div>
        );
    }
}

export default HomeBanner;
