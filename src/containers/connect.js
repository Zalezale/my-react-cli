import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../configs/actions'
const wrapActions = Object.assign({}, Actions)


const mapStateToProps = (state, ownProps) => {
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
