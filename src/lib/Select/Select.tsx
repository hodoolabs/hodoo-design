'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { MouseEvent, memo, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ArrowStyle, BlankStyle, ErrorStyle, ItemStyle, LabelStyle, ListStyle, SelectedStyle } from './style';

interface SelectItem {
	value: string;
	label: string;
}

interface SelectProps {
	size?: 'sm' | 'md' | 'lg';
	items: SelectItem[];
	selected: string;
	error?: string;
	center?: boolean;
	label?: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
	onClick?: () => void;
	onChange: (value: string) => void;
	onError?: (error: string) => void;
}

const Select = ({
	size = 'lg',
	items,
	selected,
	error,
	center = false,
	label,
	placeholder,
	required,
	className,
	onClick,
	onChange,
	onError,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [direction, setDirection] = useState<'down' | 'up'>('down');
	const isError = !!error;

	const getLabel = (items: SelectItem[], selected: string) => {
		return items.filter((item) => item.value === selected)[0]?.label;
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
		<SelectStyled className={`flex flex-col ${className}`} onMouseLeave={() => setIsOpen(false)}>
			{label && (
				<label className={cn(LabelStyle({ size, isError }))}>
					{required && <span className='text-red-600'>*</span>} {label}
				</label>
			)}
			<div className='relative'>
				<button
					type='button'
					onClick={(event) => {
						onClick ? onClick() : handleClickSelect(event);
						onError && onError('');
					}}
					className={cn(SelectedStyle({ size, placeholder: !selected, isError }))}
				>
					{selected ? getLabel(items, selected) : placeholder}
					<ChevronDownIcon className={cn(ArrowStyle({ size }))} />
				</button>
				<div className={BlankStyle({ direction })} />
				{isOpen && (
					<div className={ListStyle({ direction })}>
						<ul className='flex flex-col p-1'>
							{items.map((item) => (
								<li
									key={item.value}
									className={cn(ItemStyle({ center }))}
									onClick={() => {
										onChange(item.value);
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
			<div className={cn(ErrorStyle({ size, isError }))}>{error}</div>
		</SelectStyled>
	);
};

export default memo(
	Select,
	(prev: SelectProps, next: SelectProps) =>
		prev.size === next.size &&
		prev.items === next.items &&
		prev.selected === next.selected &&
		prev.error === next.error &&
		prev.center === next.center &&
		prev.label === next.label &&
		prev.placeholder === next.placeholder &&
		prev.className === next.className &&
		prev.onClick === next.onClick &&
		prev.onChange === next.onChange &&
		prev.onError === next.onError
);

const SelectStyled = styled.div`
	.scroll-none::-webkit-scrollbar {
		display: none;
	}

	.scroll-none::-webkit-scrollbar-thumb {
		display: none;
	}
`;
