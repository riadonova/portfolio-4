import React from 'react';
import '../footer/footer.component.scss'
import imgCardOne from '../../img/visa.png';
import imgCardTwo from '../../img/mastercard.png';
import imgCardThree from '../../img/american-ex.png';
import imgCardFour from '../../img/paypal.png';
import imgGooPl from '../../img/goo-pl.png';
import imgAppStr from '../../img/app-str.png';

export class Footer extends React.Component {
    render() {
        return (
            <div className="container footer">
                <div className="row mt-5 mb-3">
                    <div className="col-lg-3 col-md-6 col-12">
                        <h1 className="mb-3">STAR<span className="text-dark">SHOP</span></h1>
                        <p className="text-secondary">StarShop is an enchanting and easy to use theme that allows you to
                            sell your products in a dynamic way.</p>
                        <p className="text-secondary">This theme is a partial copy of the original performance.</p>
                    </div>
                    <div className="col-lg-3 mt-md-5 col-md-6 col-12">
                        <h5 className="font-weight-bold text-dark mb-3">Useful Links</h5>
                        <ul className="text-secondary p-0">
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Home</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                About Us</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Stores Locator</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Shop</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Contact Us</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h5 className="font-weight-bold text-dark mb-3">Information</h5>
                        <ul className="text-secondary p-0">
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Look Book</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Information</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Instagram Wall</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Typography</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Parallax Presentation</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                keyboard_arrow_right</i>
                                Modern Process</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h5 className="font-weight-bold text-dark mb-3">Contact Info</h5>
                        <ul className="text-secondary p-0">
                            <li><a href="#"><i className="material-icons mr-2">
                                location_on</i>
                                Planet Earth</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                mail_outline</i>
                                support@starshop.com</a></li>
                            <li><a href="#"><i className="material-icons mr-2">
                                call</i>
                                123-456-789</a></li>
                        </ul>
                        <h5 className="font-weight-bold text-dark mb-3">Newsletter</h5>
                        <div className="input-group">
                        <input className="form-control" type="email" placeholder="Enter your email"/>
                        <button className="btn btn-outline-primary my-0 bg-primary input-group-append" type="submit"><i
                            className="material-icons text-white i-send">
                            send</i></button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mb-3">
                    <div className="row pt-4 pb-3">
                        <div className="col-lg-6 text-secondary">
                            StarShop Mobile app is Available now. Download it now on your favorite device and indulge
                            in a seamless shopping experience.
                        </div>
                        <div className="col-lg-6 mt-sm-2 store-btn text-center text-lg-right text-secondary">
                            <a href="#"><img src={imgGooPl} alt="img"/></a>
                            <a href="#"><img className="mr-2" src={imgAppStr} alt="img"/></a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-5 text-secondary">
                            <p>{new Date().getFullYear()}</p>
                        </div>
                        <div className="col-7 img-card">
                            <img src={imgCardOne} alt="img"/>
                            <img className="mr-2" src={imgCardTwo} alt="img"/>
                            <img className="mr-2" src={imgCardThree} alt="img"/>
                            <img className="mr-2" src={imgCardFour} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
