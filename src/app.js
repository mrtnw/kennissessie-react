import React, { Component } from 'react';
import './app.css';
import Home from './home/home';
import Schedule from './schedule/schedule';
import Speakers from './speakers/speakers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <header className="app-header">
                        <h1 className="app-title">Luminis DevCon</h1>
                    </header>

                    <main className="app-intro">
                        <Route exact path="/" component={Home}/>
                        <Route path="/schedule" component={Schedule}/>
                        <Route path="/speakers" component={Speakers}/>
                    </main>

                    <footer className="app-footer">
                        <Link to="/">Home</Link>
                        <Link to="/schedule">Schedule</Link>
                        <Link to="/speakers">Speakers</Link>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
