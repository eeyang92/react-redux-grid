// @flow
import React from 'react'
import { render } from 'react-dom'
import { ReduxWrapper } from 'react-redux-grid'

import Main from './main'

render(
	<ReduxWrapper>
		<Main />
	</ReduxWrapper>,
	window.document.getElementById('app-container')
)
