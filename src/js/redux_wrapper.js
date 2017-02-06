import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers/index'

type Props = {
	children: any
}

const createStoreWithMiddleware = applyMiddleware()(createStore)

export default class ReduxWrapper extends Component {
	props: Props

	render() {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				{ this.props.children }
			</Provider>
		)
	}
}
