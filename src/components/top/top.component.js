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
                    <div className="col-lg-4">
                        <img className="img-before" src={imgTopOneB} alt="img"/>
                        <img className="img-after" src={imgTopOneA} alt="img"/>
                    </div>
                    <div className="col-lg-4">
                        a
                    </div>
                    <div className="col-lg-4">
                        a
                    </div>
                    <div className="col-lg-4">
                        a
                    </div>
                    <div className="col-lg-4">
                        a
                    </div>
                    <div className="col-lg-4">
                        a
                    </div>
                    <div className="col-lg-4">
                        a
                    </div>
                    <div className="col-lg-4">
                        a
                    </div>
                </div>
            </div>
        )
    }
}