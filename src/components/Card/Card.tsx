import React from 'react';
import './Card.sass';

interface CardProps {
	title: string
	innerRef?: any
	className?: string
}

const Card: React.FC<CardProps> = (props) => {
	const {title, innerRef, className, ...restprops} = props
    return (
		<div {...restprops} ref={innerRef} className={'card' + className}>
			<span>
            {title}
			</span>
		</div>
	);
};

export default Card;
