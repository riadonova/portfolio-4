import React from 'react';
import './/deals.banner.component.scss';
import imgDeals from '../../img/deals-banner.png';

export class Deals extends React.Component {
    render() {
        return (
            <div className="deals-banner">
                <div className="container">
                <div className='deals-text'>
                    <div><div className="offer-text p-2">H O T &nbsp; D E A L S</div></div>
                    <span className='deals-header font-weight-bold'>MEN'S JACKETS<br/></span>
                    UP TO 40% OFF
                    <div><button type="button" className="btn btn-link pl-0">SHOP NOW</button></div>
                </div>
                    <img src={imgDeals} alt="img"/>
            </div>
            </div>
        )
    }
}