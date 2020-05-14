import React, { useState } from 'react';
import './AddNewItem.sass';
import Button from '../Button/Button';

interface AddNewItemProps {
	variant: string;
	onAdd?(): void;
}

const AddNewItem: React.FC<AddNewItemProps> = (props) => {
	const [show, setShow] = useState<boolean>(false);

	const showHandler = () => {
		setShow(!show);
	};

	const { variant, onAdd }: AddNewItemProps = props;

	const handelSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
	};

	const placeholder: string = `Введите название ${variant === 'column' ? 'колонки' : 'карточки'}`;
	return (
		<div className='add-item'>
			{!show ? (
				<div onClick={showHandler} className='add-item__open'>
					<div className='icon-add'></div>
					<span>{placeholder} </span>
				</div>
			) : (
				<form onSubmit={handelSubmit}>
					{variant === 'column' ? (
						<div className='add-item__form'>
							<input className='card add-item__input' placeholder={placeholder} type='text' />
							<div className='add-item__btn'>
								<Button>Добавить колонку</Button>
								<div onClick={showHandler} className='icon-close'></div>
							</div>
						</div>
					) : (
						<div className='add-item__form'>
							<textarea className='card add-item__input add-item__textarea' placeholder={placeholder} />
							<div className='add-item__btn'>
								<Button>Добавить карточку</Button>
								<div onClick={showHandler} className='icon-close'></div>
							</div>
						</div>
					)}
				</form>
			)}
		</div>
	);
};

export default AddNewItem;
