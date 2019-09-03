import { PureComponent } from 'react';
import ReactDom from 'react-dom';
import './PortalContainer.scss';
const modalRoot = document.getElementById('modal-root');
class PortalContainer extends PureComponent {
    constructor(props){
        super(props);
        this.container = document.createElement('div');
        this.container.className = 'portal_container';
        // let height = document.body.clientHeight;
        // this.container.style.height = `${height}px`;
    }
    componentDidMount() {
        modalRoot.appendChild(this.container);
    }
    componentWillUnmount() {
        modalRoot.appendChild(this.container);
    }
    render() {
        return ReactDom.createPortal(
            this.props.children,
            this.container,
        )
    }
}

export default PortalContainer;