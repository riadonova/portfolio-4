import React from 'react';
import './App.scss';
import {Navbar} from "./components/navbar/navbar.component";
import {Header} from "./components/header/header.component";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Navbar/>
            </div>
        );
    }
}

export default App;
