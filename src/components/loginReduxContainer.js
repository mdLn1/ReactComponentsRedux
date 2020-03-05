import { connect } from "react-redux";
import LoginRedux from "./loginRedux";
import { login, logout } from "../actions";

const mapStateToProps = ({ authReducer }) => {
  return {
    auth: authReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginRedux);
