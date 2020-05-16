import React from 'react';
import Button from '../../Button/Button';

interface AddFormItemProps {
	placeholder: string;
	textButton: string;
	variant: string;	
	text: string;	
	handelSubmit: () => void;
	onChangeText: (e: any) => void;
	showHandler: () => void;
}

const AddFormItem = (props: AddFormItemProps) => {
	const {text, placeholder, textButton, variant, handelSubmit, onChangeText, showHandler } = props;

	const onEnterPress = (e: React.KeyboardEvent) => {
		if (e.keyCode === 13 && e.shiftKey === false) {
			e.preventDefault();
			handelSubmit();
		}
	};

	return (
		<div>
			<form onSubmit={handelSubmit}>
				<div className='add-item__form'>
					{variant === 'column' ? (
						<input
							value={text}
							className='card add-item__input'							
							onChange={onChangeText}
							placeholder={placeholder}
							type='text'
							autoFocus
						/>
					) : (
						<textarea		
							value={text}					
							onChange={onChangeText}
							onKeyDown={onEnterPress}
							className='card add-item__input add-item__textarea'
							placeholder={placeholder}
							autoFocus
						/>
					)}
					<div className='add-item__btn'>
						<Button type='submit'>{textButton} </Button>
						<div onClick={showHandler} className='icon-close'></div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddFormItem;
