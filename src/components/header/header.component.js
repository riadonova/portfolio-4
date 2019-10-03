import React from 'react';
import Icofont from 'react-icofont';
import "../header/header.component.scss";

export class Header extends React.Component {
    render() {
        return (
            <div className="header-container clearfix d-none d-lg-block">
                <div className="header-left">
                    <div className="header-item border-right dropdown">
                            <a className="btn dropdown-toggle" href="#" role="button"
                               id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                USD($)
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">RUB(₽)</a>
                                <a className="dropdown-item" href="#">EU(€)</a>
                            </div>
                        </div>
                    <div className="header-item border-right">
                        <a href="#">
                        <i className="material-icons mr-2">mail_outline</i>
                        support@hotshop.com
                        </a>
                    </div>
                    <div className="header-item border-right">
                        <a href="#">
                        <i className="material-icons mr-2">local_phone</i>
                        123-456-789
                        </a>
                    </div>
                </div>

                <div className="header-right">
                    <div className="header-item border-left">
                        <a href="#">
                            <i className="material-icons mr-2">place</i>
                            Stores Locator
                        </a>
                    </div>
                    <div className="header-item border-left">
                        <a href="#">
                            <i className="material-icons mr-2">account_circle</i>
                            My account
                        </a>
                    </div>
                    <div className="header-item border-left"><a href="#">Login</a></div>
                    <div className="header-item border-left">
                        <a className="mx-1" href="#"><Icofont icon="facebook"/></a>
                        <a className="mx-1" href="#"><Icofont icon="twitter"/></a>
                        <a className="mx-1" href="#"><Icofont icon="vimeo"/></a>
                    </div>
                </div>
            </div>
        )
    }
}