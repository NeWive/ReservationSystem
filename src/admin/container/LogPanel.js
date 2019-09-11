import LogPanel from '../component/LogPanel';
import { connect } from "react-redux";
import { setIsLogIn } from "../action/action";


const mapState = () => ({

});

const mapDispatch = (dispatch) => ({
    setLogIn: (value) => dispatch(setIsLogIn(value)),
});

export default connect(mapState, mapDispatch)(LogPanel);