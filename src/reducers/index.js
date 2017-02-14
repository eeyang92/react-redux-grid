import { combineReducers } from 'redux'

import buttonActions from './button_actions'
import buttonPositions from './button_positions'

const rootReducer = combineReducers({
	buttonActions,
	buttonPositions
})

export default rootReducer
