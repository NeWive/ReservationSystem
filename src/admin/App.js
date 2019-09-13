import React from "react";
import AdminPanel from "./component/AdminPanel";
import LogPanel from "./container/LogPanel";
import PortalContainer from "../user/element/Portal/PortalContainer";

function App(props) {
    function switchHandler() {
        switch (props.portalId) {
            default:
                return 'default';
        }
    }
    return (
        <>
            <PortalContainer>
                {
                    props.isPortalOn ? (
                        <div>
                            <div className="popLayer">

                            </div>
                            {
                                switchHandler()
                            }
                        </div>
                    ) : ''
                }
            </PortalContainer>
            <div id="App">
                {
                    props.isLogIn ? <AdminPanel/> : <LogPanel/>
                }
            </div>
        </>
    )
}

export default App;