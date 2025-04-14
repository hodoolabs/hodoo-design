'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import { SelectType } from '../../types/select';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { ArrowStyle, BlankStyle, ItemStyle, ListStyle, SelectedStyle } from './style';

interface SelectProps {
	size?: 'sm' | 'md' | 'lg';
	items?: SelectType[];
	selected?: string;
	error?: string;
	center?: boolean;
	label?: string;
	placeholder?: string;
	helper?: ReactNode;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	onClick?: () => void;
	onChange?: (value: string) => void;
	onError?: (error: string) => void;
}

const Select = ({
	size = 'lg',
	items = [],
	selected = '',
	error,
	center = false,
	label,
	placeholder,
	helper,
	disabled = false,
	required,
	className,
	onClick,
	onChange,
	onError,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [direction, setDirection] = useState<'down' | 'up'>('down');

	const getLabel = (items: SelectType[], selected: string) => {
		return items.filter((item) => item.value === selected)[0]?.label;
	};

	const getDisplayText = () => {
		if (disabled) return placeholder;
		return selected ? getLabel(items, selected) : placeholder;
	};

	const handleClickSelect = (event: MouseEvent<HTMLButtonElement>) => {
		const distanceFromBottom = document.body.clientHeight - event.clientY;

		setIsOpen((state) => !state);
		setDirection(distanceFromBottom > 340 ? 'down' : 'up');
	};

	useEffect(() => {
		if (!onError) return;

		onError('');
	}, [selected]);

	return (
		<div className={`flex flex-col ${className}`} onMouseLeave={() => setIsOpen(false)}>
			<Label size={size} error={error} label={label} disabled={disabled} required={required} />
			<div className='relative w-full'>
				<button
					type='button'
					onClick={(event) => {
						onClick ? onClick() : handleClickSelect(event);
						onError && onError('');
					}}
					disabled={disabled}
					className={cn(SelectedStyle({ size, placeholder: !selected, error: !!error }))}
				>
					{getDisplayText()}
					<ChevronDownIcon className={cn(ArrowStyle({ size }))} />
				</button>
				<div className={BlankStyle({ direction })} />
				{isOpen && !!items.length && (
					<div className={ListStyle({ direction })}>
						<ul className='flex flex-col p-1 m-0'>
							{items.map((item, index) => (
								<li
									key={index}
									className={cn(ItemStyle({ center }))}
									onClick={() => {
										onChange && onChange(item.value);
										setIsOpen(false);
									}}
								>
									{item.label}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<Helper size={size} error={error} helper={helper} disabled={disabled} />
			<ErrorMessage size={size} error={error} />
		</div>
	);
};

export default Select;
