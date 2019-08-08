import React from 'react';
import imgShopOne from '../../img/shooping-img-one.jpg';
import imgShopTwo from '../../img/shooping-img-two.jpg';
import imgShopThree from '../../img/shooping-img-three.jpg';
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
                        <img src={imgShopThree} className="d-block w-100" alt="img"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <i className="material-icons bg-dark p-2">chevron_left</i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <i className="material-icons bg-dark p-2">chevron_right</i>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}