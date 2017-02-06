// @flow
import React, { Component } from 'react'
import { render } from 'react-dom'

import Hello from 'react-flow-webpack-bp'

class Main extends Component {
	render() {
		return (
			<div style={{ height: '500px', width: '500px', border: '1px solid grey' }}>
				<Hello />
			</div>
		)
	}
}

render(
	<Main />,
	window.document.getElementById('app-container')
)
