export default (state = null, action) => {
	switch (action.type) {
	case 'BUTTON_CLICK':
		console.log('clicked!')
		return action.payload
	default:
		return state
	}
}
