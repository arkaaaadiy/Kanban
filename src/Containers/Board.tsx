import React, { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Column from '../components/Column/Column';
import AddNewItem from '../components/AddNewItem/AddNewItem';
import Card from '../components/Card/Card';
import { rootState } from '../Store/store';
import { actions } from '../Store/actions/panelActions';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

const Board = (props: Props) => {
	const { columns = [], createColumn, createCard, reorderCards, moveCards } = props;

	const onDragEnd = useCallback(
		(result: DropResult) => {
			const { source, destination } = result;
			source.droppableId === destination?.droppableId
				? reorderCards(source, destination!)
				: moveCards(source, destination!);
		},
		[moveCards, reorderCards]
	);

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				{columns.map((column) => (
					<Droppable key={column.id} droppableId={column.id}>
						{(provided, snapshot) => (
							<div ref={provided.innerRef} className='content' key={column.id}>
								<Column>
									<h2 className='column__header'>{column.title}</h2>
									<div className='column__list'>
										<div className='column__wrapper'>
											{column.cards.map((item, index) => (
												<Draggable key={item.id} draggableId={item.id} index={index}>
													{(provided, snapshot) => (
														<Card
															className={`${snapshot.isDragging ? ' card-draggbel' : ''}`}
															innerRef={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															key={item.id}
															title={item.title}
														/>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									</div>
									<div className='column__addbtn'>
										<AddNewItem onAdd={createCard} parrentId={column.id} variant='card' />
									</div>
								</Column>
							</div>
						)}
					</Droppable>
				))}
			</DragDropContext>
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

// const { createCard, createColumn, reorderCards, moveCards } = actions;

const connector = connect(mapState, actions);

type Props = ConnectedProps<typeof connector>;

export default connector(Board);
