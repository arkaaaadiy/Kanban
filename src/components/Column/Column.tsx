import React from 'react';
import Card from '../Card/Card';
import './Column.sass';
import AddNewItem from '../AddNewItem/AddNewItem';

interface ColumnProps {
    children: React.ReactNode
}

const Column: React.FC<ColumnProps> = (props) => {
    const {children}:ColumnProps = props
	return (
		<div className='column'>
			{children}
		</div>
	);
};

export default Column;
