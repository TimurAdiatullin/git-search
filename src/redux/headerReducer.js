const UPDATE_TEXT = 'UPDATE-TEXT'

let inisialState = {
	headerPage:{},
	newInputText:''
}

const headerReducer = (state = inisialState, action) => {
	switch (action.type) {
		case UPDATE_TEXT:
			let stateCopy = {...state}
			stateCopy.newInputText = action.text
			return stateCopy;
		default:
			return state;
	}
}

export const updateTextAC = (text) => ({type:UPDATE_TEXT, text:text})

export default headerReducer