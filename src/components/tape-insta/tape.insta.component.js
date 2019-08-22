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
            <div className="text-center pb-5 tape-inst overflow-hidden">
                <h2 className="font-weight-bold py-2">@starshop</h2>
                <p className="text-secondary mb-4">Follow us on Instagram</p>
                <div className="row">
                    <div className="col-md-2 img-inst">
                        <div className="wrapper-inst">
                        <img src={imgInstOne} alt="img"/>
                        <div className="inst-after text-white">
                            <div className="inst-meta">
                            <div className="inst-item mx-1">
                            <i className="material-icons mx-1">
                                favorite
                            </i>
                            <span>8</span>
                            </div>
                            <div className="inst-item mx-1">
                            <i className="material-icons mx-1">
                                chat_bubble
                            </i>
                            <span>0</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-inst">
                        <img src={imgInstTwo} alt="img"/>
                    </div>
                    <div className="col-md-2 img-inst">
                        <img src={imgInstThree} alt="img"/>
                    </div>
                    <div className="col-md-2 img-inst">
                        <img src={imgInstFour} alt="img"/>
                    </div>
                    <div className="col-md-2 img-inst">
                        <img src={imgInstFive} alt="img"/>
                    </div>
                    <div className="col-md-2 img-inst">
                        <img src={imgInstSix} alt="img"/>
                    </div>
                </div>
            </div>
        )
    }
}