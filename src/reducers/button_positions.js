export default (state = {}, action) => {
	switch (action.type) {
	case 'CREATE_SHAPE':
		console.log('HH')
		return Object.assign({}, state, { [action.payload.key]: action.payload.position })
	default:
		return state
	}
}
