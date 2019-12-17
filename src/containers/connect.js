import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../configs/actions'
import * as ActionsOther from '../configs/actionsOther'
const wrapActions = Object.assign({}, Actions, ActionsOther)


const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(wrapActions, dispatch)
    }
}

const ConnectPageA = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default ConnectPageA
