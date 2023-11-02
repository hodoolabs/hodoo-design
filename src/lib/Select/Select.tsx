'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { MouseEvent, memo, useState } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ArrowStyle, BlankStyle, ButtonStyle, LabelStyle, ListStyle, SelectedStyle } from './style';

interface SelectItem {
	value: string;
	label: string;
}

interface SelectProps {
	size: 'sm' | 'md' | 'lg';
	items: SelectItem[];
	selected: string;
	center?: boolean;
	label?: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
	onChange: (value: string) => void;
}

const Select = ({
	size,
	items,
	selected,
	center = false,
	label,
	placeholder,
	required,
	className,
	onChange,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDown, setIsOpenDown] = useState(true);

	const getLabel = (items: SelectItem[], selected: string) => {
		return items.filter((item) => item.value === selected)[0]?.label;
	};

	const handleSelectOpen = (event: MouseEvent<HTMLButtonElement>) => {
		const distanceFromBottom = document.body.clientHeight - event.clientY;

		setIsOpen((state) => !state);
		setIsOpenDown(distanceFromBottom > 340);
	};

	return (
		<SelectStyled className={className}>
			<div className='relative flex flex-col gap-2' onMouseLeave={() => setIsOpen(false)}>
				{label && (
					<label className={cn(LabelStyle({ size }))}>
						{required && <span className='text-red-600'>*</span>} {label}
					</label>
				)}
				<div className={BlankStyle({ isOpenDown })} />
				<button
					type='button'
					onClick={handleSelectOpen}
					className={cn(SelectedStyle({ size, placeholder: !selected }))}
				>
					{selected ? getLabel(items, selected) : placeholder}
					<ChevronDownIcon className={cn(ArrowStyle({ size }))} />
				</button>
				{isOpen && (
					<div className={ListStyle({ isOpenDown })}>
						<ul className='flex flex-col p-1 text-base text-gray-700'>
							{items.map((item) => (
								<li
									key={item.value}
									onClick={() => {
										onChange(item.value);
										setIsOpen(false);
									}}
								>
									<button className={cn(ButtonStyle({ center }))}>{item.label}</button>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</SelectStyled>
	);
};

export default memo(
	Select,
	(prev: SelectProps, next: SelectProps) =>
		prev.size === next.size &&
		prev.selected === next.selected &&
		prev.items === next.items &&
		prev.center === next.center &&
		prev.label === next.label &&
		prev.placeholder === next.placeholder &&
		prev.className === next.className &&
		prev.onChange === next.onChange
);

const SelectStyled = styled.div`
	.scroll-none::-webkit-scrollbar {
		display: none;
	}

	.scroll-none::-webkit-scrollbar-thumb {
		display: none;
	}
`;
