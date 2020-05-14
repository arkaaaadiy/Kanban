import { IBoard, BoardActionTypes, CREATE_COLUMN } from '../board/types';

const initialState: IBoard = {
	columns: [],
};

export const panelReducer = (state = initialState, action: BoardActionTypes) => {
	switch (action.type) {
		case CREATE_COLUMN:
			return {
				columns: [...state.columns, action.payload],
			};

		default:
			return state;
	}
};
