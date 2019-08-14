import React from 'react';

export class Product extends React.Component {
    render() {
        const topNewContent = this.props.product;
        const imgBefore = require("../../img/" + topNewContent.imgBefore);
        const imgAfter = require("../../img/" + topNewContent.imgAfter);
        return (
            <div>
                <div className="img-wrapper">
                    <img className="img-before" src={imgBefore} alt="img"/>
                    <img className="img-after" src={imgAfter} alt="img"/>
                    <div className="top-option text-center text-white">
                        <a href="#">
                            <span className="p-2 wishlist">
                            <i className="material-icons">
                                favorite_border
                            </i>
                            </span>
                        </a>
                        <a href="#">
                            <p className="d-inline-block m-0 p-2">SELECT OPTIONS</p>
                        </a>
                        <a href="#">
                            <span className="p-2 compare justify-content-center">
                            <i className="material-icons">
                                repeat
                            </i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="top-text text-left mt-3">
                    <p><a href="#">{topNewContent.category}</a></p>
                    <h5><a href="#">{topNewContent.name}</a></h5>
                    <p className="font-weight-bold">{topNewContent.price}</p>
                </div>
            </div>
        )
    }
}