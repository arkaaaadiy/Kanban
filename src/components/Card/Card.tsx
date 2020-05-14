import React from 'react';
import './Card.sass';

interface CardProps {
    title: string
}

const Card: React.FC<CardProps> = (props) => {
    const {title} = props
    return (
		<div className='card'>
			<span>
            {title}
			</span>
		</div>
	);
};

export default Card;
