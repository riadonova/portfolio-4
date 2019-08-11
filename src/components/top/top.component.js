import React from 'react';
import './top.component.scss';

export class Top extends React.Component {
    render() {
        return (
            <div className="container mt-5 text-center">
                <h2 className="font-weight-bold mb-3">Top Interesting</h2>
                <nav className="nav justify-content-center mb-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Women</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Men</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Сhildren</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pets</a>
                    </li>
                </nav>
            </div>
        )
    }
}