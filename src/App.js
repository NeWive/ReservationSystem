import React from 'react';
import AnimatedRouter from 'react-animated-router';
import Test from './Test';
import Index from './modules/index/Index';
import ReservationPanel from './modules/reservation/ReservationPanel';
import { routeConfig }from './config/route.config';
import { Route } from 'react-router-dom';
import 'react-animated-router/animate.css';
import './App.scss';

function keyMapToComponent(key) {
    switch (key) {
        case 'test':
            return Test;
        case 'index':
            return ReservationPanel;
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