export function clickButton(button) {
	return {
		type: 'BUTTON_CLICK',
		payload: button
	}
}

export function dragButtonStart(button) {
	return {
		type: 'DRAG_BUTTON_START',
		payload: button
	}
}

export function dragButtonTick(button) {
	return {
		type: 'DRAG_BUTTON_TICK',
		payload: button
	}
}

export function dragButtonStop(button) {
	return {
		type: 'DRAG_BUTTON_STOP',
		payload: button
	}
}

export function buttonSwap(button) {
	return {
		type: 'BUTTON_SWAP',
		payload: button
	}
}

export function createShape(key, position) {
	return {
		type: 'CREATE_SHAPE',
		payload: { key, position }
	}
}

export default {
	clickButton,
	dragButtonStart,
	dragButtonTick,
	dragButtonStop,
	buttonSwap,
	createShape
}
