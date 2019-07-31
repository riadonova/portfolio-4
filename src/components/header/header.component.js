import React from 'react';
import Icofont from 'react-icofont';
import "../header/header.component.scss";

export class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="row">
                <div className="header-item col-sm">USD($)</div>
                <div className="header-item col-sm">
                    <i className="material-icons mr-2">mail_outline</i>
                    support@hotshop.com
                </div>
                <div className="header-item col-sm">
                    <i className="material-icons mr-2">local_phone</i>
                    123-456-789
                </div>
                    <div className="header-item col-sm">&nbsp;</div>
                    <div className="row">
                    <div className="header-item col-sm">
                        <a href="#">
                        <i className="material-icons">place</i>
                        Stores Locator
                        </a>
                        </div>
                    <div className="header-item col-sm">
                        <a href="#">
                        <i className="material-icons">person</i>
                        My account
                        </a>
                    </div>
                    <div className="header-item col-sm"><a href="#">Login</a></div>
                    <div className="col-sm">
                        <a className="mx-1" href="#"><Icofont icon="facebook"/></a>
                        <a className="mx-1" href="#"><Icofont icon="twitter"/></a>
                        <a className="mx-1" href="#"><Icofont icon="vimeo"/></a>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}