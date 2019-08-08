import React from 'react';
import './App.scss';
import {Navbar} from "./components/navbar/navbar.component";
import {Header} from "./components/header/header.component";
import {Carousel} from "./components/carousel-banner/carousel.banner.component";
import {Advantages} from "./components/advantages/advantages.component";
import {SalesBanner} from "./components/sales-banner/sales.banner.component";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Carousel/>
                <Advantages/>
                <SalesBanner/>
            </div>
        );
    }
}

export default App;
