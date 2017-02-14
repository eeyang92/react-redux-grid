// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Hello, { DraggableShape, actions } from 'react-redux-grid'

class Main extends Component {
	constructor(props) {
		super(props)

		this.id = 0
	}

	makeNewButton() {
		this.props.createShape(this.id++, { x: 0, y: 0 })
	}

	renderButtons(buttons) {
		const toRender = []
		let count = 0

		for (const button in buttons) {
			toRender.push(<DraggableShape key={ count++ } />)
		}

		return toRender
	}

	render() {
		return (
			<div style={{ height: '500px', width: '500px', border: '1px solid grey' }}>
				<div style={{ backgroundColor: 'yellow', textAlign: 'center' }} onClick={ this.makeNewButton.bind(this) }>
					Make New Button
				</div>
				{ this.renderButtons(this.props.buttonPositions) }
			</div>
		)
	}
}

function mapStateToProps(state) {
	const buttonPositions = state.buttonPositions
	console.log(buttonPositions)

	return {
		buttonPositions
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createShape: actions.createShape }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
