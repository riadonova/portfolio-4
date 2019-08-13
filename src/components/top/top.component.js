import React from 'react';
import './top.component.scss';
import imgTopOneB from '../../img/top-01-1.jpg'
import imgTopOneA from '../../img/top-01-2.jpg'


export class Top extends React.Component {
    render() {
        return (
            <div className="container mt-5 text-center">
                <h2 className="font-weight-bold mb-3">Top Interesting</h2>
                <nav className="nav justify-content-center mb-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Popular</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Women</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Men</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Сhildren</a>
                    </li>
                </nav>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="img-wrapper">
                            <img className="img-before" src={imgTopOneB} alt="img"/>
                            <img className="img-after" src={imgTopOneA} alt="img"/>
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
                            <p><a href="#">Children</a></p>
                            <h5><a href="#">Children's Winter Suit</a></h5>
                            <p className="font-weight-bold">$100</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        a
                    </div>
                    <div className="col-lg-3">
                        a
                    </div>
                    <div className="col-lg-3">
                        a
                    </div>
                    <div className="col-lg-3">
                        a
                    </div>
                    <div className="col-lg-3">
                        a
                    </div>
                    <div className="col-lg-3">
                        a
                    </div>
                    <div className="col-lg-3">
                        a
                    </div>
                </div>
            </div>
        )
    }
}