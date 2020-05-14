import React from 'react';
import { connect } from 'react-redux';
import Column from '../components/Column/Column';
import AddNewItem from '../components/AddNewItem/AddNewItem';
import Card from '../components/Card/Card';
import { IBoard } from '../Store/board/types';


const Board: React.FC<IBoard> = (props) => {
    const {columns = []} = props
	return (
		<>
			{columns.map((column) => (
				<Column>
					<h2 className='column__header'>{column.title}</h2>
					<div className='column__list'>
						<div className='column__wrapper'>
							{column.cards.map((card) => (
								<Card title={card.title} />
							))}
						</div>
					</div>
					<div className='column__addbtn'>
						<AddNewItem variant='card' />
					</div>
				</Column>
			))}
			<div className='content'>
				<Column>
					<AddNewItem variant='column' />
				</Column>
			</div>
		</>
	);
};



export default connect((state: IBoard)=>({
    columns: state.columns
}))(Board);
