import React from 'react';
import AnimatedRouter from 'react-animated-router';
import Test from './Test';
import Index from './user/modules/index/Index';
import ReservationPanel from './user/modules/reservation/ReservationPanel';
import Admin from './admin/container/App.js';
import { routeConfig }from './user/config/route.config';
import { Route } from 'react-router-dom';
import 'react-animated-router/animate.css';
import './App.scss';

function keyMapToComponent(key) {
    switch (key) {
        case 'test':
            return Test;
        case 'index':
            return ReservationPanel;
        case 'user':
            return Index;
        case 'admin':
            return Admin;
        default:
            return Index;
    }
}

class App extends React.PureComponent {
    render() {
        return (
           <div id="App">
               <AnimatedRouter>
                   {
                       routeConfig.map((item) => (
                           <Route path={item.path} key={item.key} component={keyMapToComponent(item.key)}/>
                       ))
                   }
               </AnimatedRouter>
           </div>
        )
    }
}

export default App;