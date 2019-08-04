import React from 'react';
import imgShopOne from '../../img/shop.jpg';
import imgShopTwo from '../../img/shooping-img-two.jpg';
import "../carousel-banner/carousel.banner.component.scss";


export class Carousel extends React.Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgShopOne} className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgShopTwo} className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgShopOne} className="d-block w-100" alt="img"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}