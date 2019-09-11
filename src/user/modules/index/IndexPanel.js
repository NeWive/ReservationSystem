import React from 'react';
import Header from '../../element/IndexHeader/Header';
import IndexBody from '../../element/IndexBody/IndexBody';
import ReservationFooter from '../reservation/ReservationFooter';
import PortalContainer from '../../element/Portal/PortalContainer';
import UploadImg from '../../element/Portal/UploadImg';
import { setPropsHandler } from "../../functions/propsHandler";
import { connect } from 'react-redux';
import './IndexPanel.scss';

function map(state) {
    return {
        isPortalOn: state.isPortalOn,
        portalId: state.portalId,
    }
}

class IndexPanel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.portalHandler = this.portalHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.switchHandler = this.switchHandler.bind(this);
    }
    switchHandler(id) {
        console.log(id);
        switch(id) {
            case 0:
                return <UploadImg clickHandler={this.clickHandler}/>;
            default:
                return '';
        }
    }
    clickHandler() {
        setPropsHandler(this, 'SET_PORTAL_ON', false);
        setPropsHandler(this, 'SET_PORTAL_ID', -1);
        let father = document.getElementById('modal-root');
        father.style.zIndex = '-1';
        console.log(father);
    }
    async portalHandler(e) {
        if(e.target.className === 'popLayer') {
            console.log(1);
            this.clickHandler();
        }
    }
    componentDidMount() {
        window.addEventListener('click', this.portalHandler);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.portalHandler);
    }
    render() {
        return (
            <div id="IndexPanel">
                <PortalContainer>
                    {
                        this.props.isPortalOn ? (
                                <div>
                                    <div className="popLayer">

                                    </div>
                                    {
                                        this.switchHandler(this.props.portalId)
                                    }
                                </div>
                        ) : ''
                    }
                </PortalContainer>
                <div className="header_box">
                    <Header/>
                </div>
                <div className="body_box">
                    <IndexBody/>
                </div>
                <div className="footer_box">
                    <ReservationFooter/>
                </div>
            </div>
        )
    }
}

export default connect(map)(IndexPanel);