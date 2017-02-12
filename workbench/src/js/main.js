// @flow
import React, { Component } from 'react'
import { render } from 'react-dom'

import Hello, { ReduxWrapper } from 'react-flow-webpack-bp'

export default class Main extends Component {
	render() {
		return (
			<div style={{ height: '500px', width: '500px', border: '1px solid grey' }}>
				<ReduxWrapper>
					<Hello />
				</ReduxWrapper>
			</div>
		)
	}
}
