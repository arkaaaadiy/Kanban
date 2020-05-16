import { IBoard, IColumn } from '../board/types';
import { PanelActionTypes } from '../actions/panelActions';

const initialState: IBoard = {
	 columns: [
		{
		  title: '14124',
		  id: 1589644268041,
		  cards: [
			{
			  title: '124214',
			  id: 1589644273688,
			  parrentId: 1589644268041
			},
			{
			  title: '1324',
			  id: 1589644275648,
			  parrentId: 1589644268041
			},
			{
			  title: '4112',
			  id: 1589644276032,
			  parrentId: 1589644268041
			},
			{
			  title: '42',
			  id: 1589644276232,
			  parrentId: 1589644268041
			},
			{
			  title: '15',
			  id: 1589644276424,
			  parrentId: 1589644268041
			},			
			{
			  title: '5',
			  id: 1589644277911,
			  parrentId: 1589644268041
			},
			{
			  title: '21',
			  id: 1589644278104,
			  parrentId: 1589644268041
			},
			{
			  title: '5',
			  id: 1589644278248,
			  parrentId: 1589644268041
			},
			{
			  title: '215',
			  id: 1589644278424,
			  parrentId: 1589644268041
			},
			{
			  title: '21',
			  id: 1589644278584,
			  parrentId: 1589644268041
			},
			{
			  title: '5',
			  id: 1589644278759,
			  parrentId: 1589644268041
			},
			{
			  title: '21',
			  id: 1589644278936,
			  parrentId: 1589644268041
			},
			{
			  title: '52',
			  id: 1589644279111,
			  parrentId: 1589644268041
			}
		  ]
		},
		{
		  title: '12414',
		  id: 1589644270137,
		  cards: [
			{
			  title: '214',
			  id: 1589644282136,
			  parrentId: 1589644270137
			},
			{
			  title: '214',
			  id: 1589644282336,
			  parrentId: 1589644270137
			},
			{
			  title: '21',
			  id: 1589644282472,
			  parrentId: 1589644270137
			},
			{
			  title: '4',
			  id: 1589644282632,
			  parrentId: 1589644270137
			},
			{
			  title: '2145',
			  id: 1589644282816,
			  parrentId: 1589644270137
			},
			{
			  title: '21',
			  id: 1589644282968,
			  parrentId: 1589644270137
			},
			{
			  title: '4',
			  id: 1589644283136,
			  parrentId: 1589644270137
			},
			{
			  title: '21',
			  id: 1589644283288,
			  parrentId: 1589644270137
			},
			{
			  title: '4',
			  id: 1589644283456,
			  parrentId: 1589644270137
			},
			{
			  title: '21',
			  id: 1589644283600,
			  parrentId: 1589644270137
			},
			{
			  title: '4',
			  id: 1589644283760,
			  parrentId: 1589644270137
			},
			{
			  title: '21',
			  id: 1589644283904,
			  parrentId: 1589644270137
			},
			{
			  title: '4',
			  id: 1589644284057,
			  parrentId: 1589644270137
			},
			{
			  title: '214',
			  id: 1589644284199,
			  parrentId: 1589644270137
			},
			{
			  title: '21',
			  id: 1589644284360,
			  parrentId: 1589644270137
			},
			{
			  title: '4',
			  id: 1589644284504,
			  parrentId: 1589644270137
			},
			{
			  title: '21',
			  id: 1589644284648,
			  parrentId: 1589644270137
			},
			{
			  title: '4',
			  id: 1589644284808,
			  parrentId: 1589644270137
			}
		  ]
		}
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
					...state.columns.map((el):IColumn => {
						if (el.id === action.payload.parrentId) {
							el.cards.push(action.payload);
							return el
						} else return el
					}),
				],
			};

		default:
			return state;
	}
}
