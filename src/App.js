import React from 'react';
import './App.scss';
import {Navbar} from "./components/navbar/navbar.component";
import {Header} from "./components/header/header.component";
import {Carousel} from "./components/carousel-banner/carousel.banner.component";
import {Advantages} from "./components/advantages/advantages.component";
import {SalesBanner} from "./components/sales-banner/sales.banner.component";
import {Top} from "./components/top/top.component";
import {Deals} from "./components/deals-banner/deals.banner.component";
import {CarouselBrands} from "./components/carousel-brands/carousel.brands.component";
import {Tape} from "./components/tape-insta/tape.insta.component";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Carousel/>
                <Advantages/>
                <SalesBanner/>
                <Top/>
                <Deals/>
                <CarouselBrands/>
                <Tape/>
            </div>
        );
    }
}

export default App;
