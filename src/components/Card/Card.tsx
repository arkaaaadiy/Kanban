import React, { CSSProperties } from 'react';
import './Card.sass';

interface CardProps {
	title: string
	innerRef?: any
	className?: string
	style: CSSProperties
}

const Card: React.FC<CardProps> = (props) => {
	const {title, innerRef, className, style, ...restprops} = props
    return (
		<div  {...restprops} ref={innerRef} style={style} className={'card' + className}>
			<div className='icon-close card__delete'></div>
			<span>
            {title}
			</span>
		</div>
	);
};

export default Card;
