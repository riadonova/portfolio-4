import React from 'react';
import './top.component.scss';
import {Product} from "./top.product.component";
import {topProducts} from "../../../src/data/products";

export class Top extends React.Component {
    render() {
        return (
            <div className="container mt-5 mb-5 text-center">
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
                    {topProducts.map(product => {
                        return (<div className="col-lg-3 col-md-6 col-sm-6 p-2">
                            <Product product={product}/>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}