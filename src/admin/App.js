import React from "react";
import AdminPanel from "./component/AdminPanel";
import LogPanel from "./container/LogPanel";
// import './App.scss';

function App(props) {
    return (
        <div id="App">
            {
                props.isLogIn ? <AdminPanel/> : <LogPanel/>
            }
        </div>
    )
}

export default App;