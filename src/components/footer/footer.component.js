import React from 'react';
import '../footer/footer.component.scss'

export class Footer extends React.Component {
    render() {
        return (
            <div className="container footer">
                <div className="row mt-5">
                    <div className="col-sm-3">
                        <h1 className="mb-3">STAR<span className="text-dark">SHOP</span></h1>
                        <p className="text-secondary">StarShop is an enchanting and easy to use  theme that allows you to sell your products in a dynamic way.</p>
                        <p className="text-secondary">This theme is a partial copy of the original performance.</p>
                    </div>
                    <div className="col-sm-3">
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
                    <div className="col-sm-3">
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
                    <div className="col-sm-3">
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
                        <input className="form-control mr-sm-2" type="text" placeholder="Enter your email" aria-label="text"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0 bg-primary" type="submit"><i
                            className="material-icons text-white i-send">
                            send</i></button>
                    </div>
                </div>
            </div>
        )
    }
}
