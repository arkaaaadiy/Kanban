import React, { useState, useCallback } from 'react';
import './AddNewItem.sass';
import AddFormItem from './AddFormItem/AddFormItem';

interface AddNewItemProps {
	variant: 'column' | 'card';
	onAdd?: (value: any) => any;
	parrentId?: string;
}

const AddNewItem: React.FC<AddNewItemProps> = (props) => {
	const { variant, onAdd, parrentId }: AddNewItemProps = props;
	const [show, setShow] = useState<boolean>(false);
	const [text, setText] = useState<string>('');

	const showHandler = () => {
		setShow(!show);
	};

	const handelSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
		event && event.preventDefault();
		if (text !== '') {
			if (variant === 'column') {
				onAdd!({ title: text, id: Date.now().toString(), cards: [] });
				setText('');
			} else {
				onAdd!({ title: text, id: Date.now().toString(), parrentId: parrentId });
				setText('');
			}
		}
	};

	const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value), []);

	const placeholder: string = `Введите название ${variant === 'column' ? 'колонки' : 'карточки'}`;
	const textButton: string = `Добавить ${variant === 'column' ? 'колонку' : 'карточку'}`;
	return (
		<div className='add-item'>
			{!show ? (
				<button onClick={showHandler} className='add-item__open'>
					<div className='icon-add'></div>
					<span>{placeholder}</span>
				</button>
			) : (
				<AddFormItem
					text={text}
					onChangeText={onChangeText}
					showHandler={showHandler}
					placeholder={placeholder}
					textButton={textButton}
					variant={variant}
					handelSubmit={handelSubmit}
				/>
			)}
		</div>
	);
};

export default AddNewItem;
