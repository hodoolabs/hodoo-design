'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { MouseEvent, memo, useState } from 'react';
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
	onChange: (value: string) => void;
}

const Select = ({ size, items, selected, center = false, label, placeholder, onChange }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDown, setIsOpenDown] = useState(true);

	const getLabel = (items: SelectItem[], selected: string) => {
		return items.filter((item) => item.value === selected)[0]?.label;
	};

	const handleSelectOpen = (event: MouseEvent<HTMLButtonElement>) => {
		const root = document.getElementById('root');
		const distanceFromBottom = root!.clientHeight - event.clientY;

		setIsOpen((state) => !state);
		setIsOpenDown(distanceFromBottom > 320);
	};

	return (
		<div className='relative flex flex-col gap-2' onMouseLeave={() => setIsOpen(false)}>
			{label && <p className={cn(LabelStyle({ size }))}>{label}</p>}
			<div className={BlankStyle({ isOpenDown })} />
			<button type='button' onClick={handleSelectOpen} className={cn(SelectedStyle({ size }))}>
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
		prev.onChange === next.onChange
);
