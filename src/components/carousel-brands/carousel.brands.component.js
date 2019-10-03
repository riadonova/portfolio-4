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
    constructor(props) {
        super(props);
        this.state = {
            settings:  {
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 500,
                slidesToShow: window.innerWidth > 500 ? 5 : 3,
                slidesToScroll: 1,
            }
        };
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.state.settings.slidesToShow = window.innerWidth > 500 ? 5 : 3;
            this.setState(this.state);
        }, false);
    }

    render() {
        const {settings} = this.state;
        return (
            <div className="container mt-5 mb-5">
                <div className="text-center">
                    <h2 className="font-weight-bold">Our Brands</h2>
                </div>
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