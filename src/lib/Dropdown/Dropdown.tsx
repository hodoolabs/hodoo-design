'use client';

import { Dispatch, SetStateAction, memo } from 'react';
import ReactDOM from 'react-dom';

interface DropdownProps {
	element: Element | DocumentFragment;
	top: number;
	left: number;
	list: string[];
	onClick: (name: string) => void;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = ({ element, top, left, list, onClick, setOpen }: DropdownProps) => {
	return (
		<>
			{ReactDOM.createPortal(
				<div
					className='absolute flex flex-col items-start w-64 p-1 overflow-auto bg-white border border-gray-200 h-fit max-h-80 rounded-xl'
					style={{ top: `${top}px`, left: `${left}px` }}
					onMouseLeave={() => setOpen(false)}
				>
					{list.map((name, index) => {
						return (
							<p
								key={index}
								className='flex items-center w-full px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700'
								onClick={() => onClick(name)}
							>
								{name}
							</p>
						);
					})}
				</div>,
				element
			)}
		</>
	);
};

export default memo(
	Dropdown,
	(prev: DropdownProps, next: DropdownProps) =>
		prev.element === next.element &&
		prev.top === next.top &&
		prev.left === next.left &&
		prev.list === next.list &&
		prev.onClick === next.onClick &&
		prev.setOpen === next.setOpen
);
