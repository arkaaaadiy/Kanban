import { IBoard, IColumn } from '../board/types';
import { PanelActionTypes } from '../actions/panelActions';
import { reorderCard, moveCard } from '../../utils/utils';

const initialState: IBoard = {
	columns: [
		{
			title: '23134',
			id: '1589732150769',
			cards: [
				{
					title: '3123',
					id: '1589732153934',
					parrentId: '1589732150769',
				},
				{
					title: '213213',
					id: '1589732154776',
					parrentId: '1589732150769',
				},
				{
					title: '3213',
					id: '1589732155869',
					parrentId: '1589732150769',
				},
				{
					title: '4124125',
					id: '1589732156984',
					parrentId: '1589732150769',
				},
			],
		},
		{
			title: '42143',
			id: '1589732152308',
			cards: [
				{
					title: '4214',
					id: '1589732158612',
					parrentId: '1589732152308',
				},
				{
					title: '21312',
					id: '1589732159469',
					parrentId: '1589732152308',
				},
				{
					title: '4124213',
					id: '1589732160864',
					parrentId: '1589732152308',
				},
			],
		},
	],
};

export default function panelReducer(state = initialState, action: PanelActionTypes): IBoard {
	switch (action.type) {
		case 'CREATE_COLUMN':
			return {
				...state,
				columns: [...state.columns, action.payload],
			};
		case 'CREATE_CARD':
			return {
				...state,
				columns: [
					...state.columns.map(
						(el): IColumn => {
							if (el.id === action.payload.parrentId) {
								el.cards.push(action.payload);
								return el;
							} else return el;
						}
					),
				],
			};
		case 'REORDER_CARDS':
			const { source, destination } = action.payload;
			return reorderCard(state, source, destination);
		case 'MOVE_CARDS':			
			return moveCard(state, action.payload.source, action.payload.destination);
		default:
			return state;
	}
}
