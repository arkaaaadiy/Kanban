

export interface IColumn {
    title: string
    id: number
    cards: Array<ICard>
}

export interface ICard {
    parrentId: number
    id: number
    title: string
}

export interface IBoard {
    columns: Array<IColumn>
}

interface CreateColumnAction {
    type: 'CREATE_COLUMN'
    payload: IColumn
}

interface CreateCardAction {
    type: 'CREATE_CARD'
    payload: ICard
}

export type BoardActionTypes = CreateColumnAction | CreateCardAction