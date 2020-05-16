import { IColumn,ICard } from '../board/types';
import { InferValueTypes } from '../store';

export const actions = {
	createColumn: (column: IColumn) => ({ type: 'CREATE_COLUMN', payload: column } as const),
	createCard: (card: ICard) => ({ type: 'CREATE_CARD', payload: card } as const),
};

export type PanelActionTypes = ReturnType<InferValueTypes<typeof actions>>;
