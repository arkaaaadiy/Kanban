import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Column from '../components/Column/Column';
import AddNewItem from '../components/AddNewItem/AddNewItem';
import Card from '../components/Card/Card';
import { rootState } from '../Store/store';
import { actions } from '../Store/actions/panelActions';

const Board = (props: Props) => {	
	const { columns = [], createColumn, createCard } = props;
	return (
		<>
			{columns.map((column) => (
				<div className='content' key={column.id}>
					<Column>
						<h2 className='column__header'>{column.title}</h2>
						<div className='column__list'>
							<div className='column__wrapper'>
								{column.cards.map((card) => (
									<Card key={card.id} title={card.title} />
								))}
							</div>
						</div>
						<div className='column__addbtn'>
							<AddNewItem onAdd={createCard} parrentId={column.id} variant='card' />
						</div>
					</Column>
				</div>
			))}
			<div className='content'>
				<Column>
					<AddNewItem onAdd={createColumn} variant='column' />
				</Column>
			</div>
		</>
	);
};

const mapState = (state: rootState) => ({
	columns: state.panel.columns,
});

const {createCard, createColumn} = actions

const connector = connect(mapState, { createCard, createColumn });

type Props = ConnectedProps<typeof connector>;

export default connector(Board);
