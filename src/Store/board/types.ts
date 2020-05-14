export const CREATE_COLUMN = 'CREATE_COLUMN'
export const CREATE_CARD = 'CREATE_CARD' 

export interface IColumn {
    title: string
    cards: Array<ICard>
}

export interface ICard {
    title: string
}

export interface IBoard {
    columns: Array<IColumn>
}

interface CreateColumnAction {
    type: typeof CREATE_COLUMN
    payload: IColumn
}

interface CreateCardAction {
    type: typeof CREATE_CARD
    payload: ICard
}

export type BoardActionTypes = CreateColumnAction | CreateCardAction