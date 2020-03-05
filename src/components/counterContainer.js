import { connect } from 'react-redux'
import Counter from './counterComp'
import { increment, decrement, current } from '../actions';

const mapStateToProps = ({counterReducer}) => {
   return {
      counter: counterReducer
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(current())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);