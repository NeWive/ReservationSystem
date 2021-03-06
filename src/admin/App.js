import React from "react";
import AdminPanel from "./component/AdminPanel";
import EditUserInfo from "./container/EditUserInfo";
import LogPanel from "./container/LogPanel";
import PortalContainer from "../user/element/Portal/PortalContainer";
import HandleStatus from "./container/HandleStatus";

function App(props) {
    function switchHandler() {
        switch (props.portalId) {
            case 0:
                return <HandleStatus/>;
            case 1:
                return <EditUserInfo/>
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