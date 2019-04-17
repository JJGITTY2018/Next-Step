import {connect } from "react-redux";
import {withRouter} from "react-router"

import {checkUserAuthStatus} from "../../Redux/Actions/Auth_actions.js"

import AnswerFeed from './answerFeed'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  function_checkStatus:() => 
    dispatch(checkUserAuthStatus())
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnswerFeed))