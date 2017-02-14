// @flow
import React, { Component } from 'react'
import { DraggableCore } from 'react-draggable'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clickButton } from '../../actions/index'

type Props = {}
type State = {
	count: number
}

class DraggableShape extends Component {
	props: Props
	state: State

	onClick() {
		// this.props.clickButton('hello')
	}

	onStart(e) {
		console.log('start:', e)
	}

	onDrag(e) {
		console.log('drag: ', e)
	}

	onStop(e) {
		console.log('stop:', e)
	}

	render() {
		return (
			<DraggableCore
				onStart={ this.onStart.bind(this) }
				onDrag={ this.onDrag.bind(this) }
				onStop={ this.onStop.bind(this) }
			>
				<div
					onClick={ this.onClick.bind(this) }
					style={{ backgroundColor: 'blue', height: '100px', width: '200px', border: '1px solid grey' }}
				>
					Shape
				</div>
			</DraggableCore>
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

export default connect(mapStateToProps, mapDispatchToProps)(DraggableShape)
