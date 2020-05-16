import React from 'react';
import './Column.sass';


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
