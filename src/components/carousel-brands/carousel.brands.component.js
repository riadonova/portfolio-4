import React from 'react';
import './carousel.brands.component.scss';
import Slider from "react-slick";
import imgBrandOne from '../../img/brand-one.png';
import imgBrandTwo from '../../img/brand-two.png';
import imgBrandThree from '../../img/brand-three.png';
import imgBrandFour from '../../img/brand-four.png';
import imgBrandFive from '../../img/brand-five.png';
import imgBrandSix from '../../img/brand-six.png';

export class CarouselBrands extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        return (
            <div className="container mt-5 mb-5">
                <Slider {...settings}>
                    <div>
                        <div className="brand"><img src={imgBrandOne} alt="img"/></div>
                    </div>
                    <div>
                        <div className="brand"><img src={imgBrandTwo} alt="img"/></div>
                    </div>
                    <div>
                        <div className="brand"><img src={imgBrandThree} alt="img"/></div>
                    </div>
                    <div>
                        <div className="brand"><img src={imgBrandFour} alt="img"/></div>
                    </div>
                    <div>
                        <div className="brand"><img src={imgBrandFive} alt="img"/></div>
                    </div>
                    <div>
                        <div className="brand"><img src={imgBrandSix} alt="img"/></div>
                    </div>
                </Slider>
            </div>
        );
    }
}