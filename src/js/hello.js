// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clickButton } from '../actions/index'

type Props = {}
type State = {
	count: number
}

class ReactReduxGrid extends Component {
	props: Props
	state: State

	onClick() {
		this.props.clickButton('hello')
	}

	render() {
		return (
			<div onClick={ this.onClick.bind(this) } style={{ backgroundColor: 'grey' }}>
				Hello!
			</div>
		)
	}
}

function mapStateToProps(state) {
	const buttonActions = state.buttonActions

	return {
		buttonActions
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ clickButton }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxGrid)
