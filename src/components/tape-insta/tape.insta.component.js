import React from 'react';
import './tape.insta.componet.scss';
import imgInstOne from '../../img/insta-01.jpg';
import imgInstTwo from '../../img/insta-02.jpg';
import imgInstThree from '../../img/insta-03.jpg';
import imgInstFour from '../../img/insta-04.jpg';
import imgInstFive from '../../img/insta-05.jpg';
import imgInstSix from '../../img/insta-06.jpg';

export class Tape extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h2 className="font-weight-bold">@starshop</h2>
                <p className="text-secondary mb-4">Follow us on instagram</p>
                <div className="row img-inst">
                    <div className="col-lg-2">
                        <img src={imgInstOne} alt="img"/>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgInstTwo} alt="img"/>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgInstThree} alt="img"/>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgInstFour} alt="img"/>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgInstFive} alt="img"/>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgInstSix} alt="img"/>
                    </div>
                </div>
            </div>
        )
    }
}