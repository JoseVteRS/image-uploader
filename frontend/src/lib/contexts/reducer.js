import {
	SUBMIT_IMAGE_BEGIN,
	SUBMIT_IMAGE_ERROR,
	SUBMIT_IMAGE_SUCCESS
} from './actions';

const reducer = (state, action) => {
	switch (action.type) {
		case SUBMIT_IMAGE_BEGIN:
			return {
				...state,
				isLoading: true
			};

		case SUBMIT_IMAGE_SUCCESS:
			return {
				...state,
				isLoading: false,
				image: action.payload
			};

		case SUBMIT_IMAGE_ERROR:
			return { ...state, isLoading: false };

		default:
			throw new Error(`No such action: ${action.type}`);
	}
};


export default reducer;