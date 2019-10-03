import React from 'react';
import '../navbar/navbar.component.scss'

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light pr-2 pl-2">
                <a className="navbar-brand" href="#">STAR<span className="text-dark">SHOP</span></a>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BRANDS</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="row">
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">BRAND</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">BRAND</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">BRAND</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATALOG</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="row">
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">PRODUCT NAME</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">PRODUCT NAME</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">PRODUCT NAME</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SHOP
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="row">
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">WOMEN</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">MEN</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                    <div className="col-sm-4"><div className="font-weight-bold text-primary" href="#">CHILDREN</div>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                        <a className="dropdown-item" href="#">Name</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GIFTS</a>
                        </li>
                    </ul>
                </div>
                <div className="icon-block">
                <a href="#"><i className="material-icons-outlined mx-2">
                    local_grocery_store
                </i></a>
                <a href="#"><i className="material-icons mx-2">
                    favorite_border
                </i></a>
                <a href="#"><i className="material-icons mx-2">
                    search
                </i></a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}