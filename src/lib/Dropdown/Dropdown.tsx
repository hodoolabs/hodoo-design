'use client';

import { ReactNode, RefObject, memo, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { DropdownType } from '../../types/dropdown';

interface DropdownProps {
	isOpen: boolean;
	list: DropdownType[];
	width: number;
	height: number;
	position: 'left' | 'right';
	className?: string;
	children: ReactNode;
	onSelect: (name: string) => void;
	onOpen: (value: boolean) => void;
}

const Dropdown = ({ isOpen, list, width, height, position, className, children, onSelect, onOpen }: DropdownProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [element, setElement] = useState<Element | DocumentFragment>();
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const handleSetPosition = (ref: RefObject<HTMLDivElement>) => {
		if (!ref.current) return;

		const target = ref.current.getBoundingClientRect();

		setTop(target.top + target.height + 12);

		if (position === 'left') setLeft(target.left);
		if (position === 'right') setLeft(target.left - width + target.width);
	};

	useEffect(() => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		setElement(div);

		return () => {
			document.body.removeChild(div);
		};
	}, []);

	useEffect(() => {
		handleSetPosition(ref);

		const handleResizeWindow = () => {
			handleSetPosition(ref);
			onOpen(false);
		};

		global.window.addEventListener('resize', handleResizeWindow);

		return () => {
			global.window.removeEventListener('resize', handleResizeWindow);
		};
	}, [ref]);

	return (
		<div ref={ref} className='inline-block'>
			{children}
			{isOpen &&
				element &&
				ReactDOM.createPortal(
					<div
						className={`absolute flex flex-col p-1 overflow-auto bg-white border border-gray-200 rounded-xl ${className}`}
						style={{ top, left, width, height }}
						onMouseLeave={() => onOpen(false)}
					>
						{list.map((item) => (
							<p
								key={item.value}
								className='px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700'
								onClick={() => onSelect(item.value)}
							>
								{item.label}
							</p>
						))}
					</div>,
					element
				)}
		</div>
	);
};

export default memo(
	Dropdown,
	(prev: DropdownProps, next: DropdownProps) =>
		prev.isOpen === next.isOpen &&
		prev.list === next.list &&
		prev.width === next.width &&
		prev.height === next.height &&
		prev.position === next.position &&
		prev.className === next.className &&
		prev.children === next.children &&
		prev.onSelect === next.onSelect &&
		prev.onOpen === next.onOpen
);
