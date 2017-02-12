import { combineReducers } from 'redux'

// import BooksReducer from './reducer_books'
// import ActiveBook from './reducer_active_book'
import buttonActions from './button_actions'

const rootReducer = combineReducers({
	buttonActions
})

export default rootReducer
