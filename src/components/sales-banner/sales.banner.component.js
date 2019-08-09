import React from 'react';
import '../sales-banner/sales.banner.component.scss';
import imgSaleOne from '../../img/sale-banner-one.jpg';
import imgSaleTwo from '../../img/sale-banner-two.jpg';
import imgSaleThree from '../../img/sale-banner-three.jpg';

export class SalesBanner extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="sale-banner-one">
                            <img className="img-banner-sale w-100" src={imgSaleOne} alt="img"/>
                            <div className='text-sales'>
                                <p className="percent font-weight-bold">
                                    30% OFF
                                    <br/>
                                    <span className="name-sales font-weight-light">SUMMER<br/>DRESS</span>
                                </p>
                                <button type="button" className="btn btn-dark">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="sale-banner-two">
                            <img className="img-banner-sale w-100 mb-4" src={imgSaleTwo} alt="img"/>
                            <div className='text-sales'>
                                <p className="percent">
                                    <span className="font-weight-bold">10% OFF</span>
                                    <br/>
                                    BAGS
                                </p>
                                <button type="button" className="btn btn-dark">SHOP NOW</button>
                            </div>
                        </div>
                        <div>
                            <div className="sale-banner-three">
                                <img className="img-banner-sale w-100 mt-1" src={imgSaleThree} alt="img"/>
                                <div className='text-sales'>
                                    <p className="percent">
                                        <span className="font-weight-bold">15% OFF</span>
                                        <br/>
                                        GLASSES
                                    </p>
                                    <button type="button" className="btn btn-dark">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}