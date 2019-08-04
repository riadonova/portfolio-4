import React from 'react';
import './App.scss';
import {Navbar} from "./components/navbar/navbar.component";
import {Header} from "./components/header/header.component";
import {Carousel} from "./components/carousel-banner/carousel.banner.component";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Carousel/>
            </div>
        );
    }
}

export default App;
