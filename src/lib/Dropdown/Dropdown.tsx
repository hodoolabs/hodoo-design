'use client';

import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { DropdownType } from '../../types/dropdown';

// 전역 드롭다운 관리를 위한 상수
const DROPDOWN_MANAGER = {
	currentOpenDropdown: null as string | null,
	setCurrentDropdown: (id: string | null) => {
		DROPDOWN_MANAGER.currentOpenDropdown = id;
	},
	isDropdownOpen: (id: string) => {
		return DROPDOWN_MANAGER.currentOpenDropdown === id;
	},
	closeCurrentDropdown: () => {
		DROPDOWN_MANAGER.currentOpenDropdown = null;
	},
};

interface DropdownProps {
	isOpen: boolean;
	list: DropdownType[];
	width: number;
	height: number;
	position?: 'left' | 'right';
	className?: string;
	children: ReactNode;
	onSelect: (value: string, label?: string) => void;
	onOpen: (value: boolean) => void;
}

const Dropdown = ({
	isOpen,
	list,
	width,
	height,
	position = 'left',
	className,
	children,
	onSelect,
	onOpen,
}: DropdownProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [element, setElement] = useState<Element | DocumentFragment>();
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	// 고유 ID 생성 (컴포넌트별 고유성 보장)
	const dropdownId = useRef(`dropdown-${Math.random().toString(36).substr(2, 9)}`);

	const handleSetPosition = (ref: RefObject<HTMLDivElement>) => {
		if (!ref.current) return;

		const target = ref.current.getBoundingClientRect();

		setTop(target.top + target.height + 12);

		if (position === 'left') setLeft(target.left);
		if (position === 'right') setLeft(target.left - width + target.width);
	};

	// 외부 클릭 감지 함수
	const handleOutsideClick = (event: MouseEvent) => {
		const target = event.target as Node;
		const isClickInsideChildren = ref.current?.contains(target);
		const isClickInsideDropdown = dropdownRef.current?.contains(target);

		// children과 dropdown element 외부 클릭 시 닫기
		const shouldCloseDropdown = !isClickInsideChildren && !isClickInsideDropdown;

		if (shouldCloseDropdown && isOpen) {
			onOpen(false);
			DROPDOWN_MANAGER.closeCurrentDropdown();
		}
	};

	// 드롭다운 열기 처리
	const handleDropdownOpen = (shouldOpen: boolean) => {
		if (shouldOpen) {
			// 다른 드롭다운이 열려있다면 닫기
			if (DROPDOWN_MANAGER.currentOpenDropdown && DROPDOWN_MANAGER.currentOpenDropdown !== dropdownId.current) {
				// 기존 열린 드롭다운을 닫기 위한 이벤트 발생
				const closeEvent = new CustomEvent('closeOtherDropdowns', {
					detail: { exceptId: dropdownId.current },
				});
				window.dispatchEvent(closeEvent);
			}

			DROPDOWN_MANAGER.setCurrentDropdown(dropdownId.current);
		} else {
			DROPDOWN_MANAGER.closeCurrentDropdown();
		}

		onOpen(shouldOpen);
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const div = document.createElement('div');
		document.body.appendChild(div);
		setElement(div);

		return () => {
			if (document.body.contains(div)) {
				document.body.removeChild(div);
			}
		};
	}, []);

	useEffect(() => {
		handleSetPosition(ref);

		const handleResizeWindow = () => {
			handleSetPosition(ref);
			handleDropdownOpen(false);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResizeWindow);

			return () => {
				window.removeEventListener('resize', handleResizeWindow);
			};
		}
	}, [ref]);

	// 외부 클릭 이벤트 리스너 등록
	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleOutsideClick);
		} else {
			document.removeEventListener('mousedown', handleOutsideClick);
		}

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isOpen]);

	// 다른 드롭다운 닫기 이벤트 리스너
	useEffect(() => {
		const handleCloseOtherDropdowns = (event: CustomEvent) => {
			if (event.detail.exceptId !== dropdownId.current && isOpen) {
				onOpen(false);
			}
		};

		window.addEventListener('closeOtherDropdowns', handleCloseOtherDropdowns as EventListener);

		return () => {
			window.removeEventListener('closeOtherDropdowns', handleCloseOtherDropdowns as EventListener);
		};
	}, [isOpen, onOpen]);

	// 컴포넌트 언마운트 시 전역 상태 정리
	useEffect(() => {
		return () => {
			if (DROPDOWN_MANAGER.currentOpenDropdown === dropdownId.current) {
				DROPDOWN_MANAGER.closeCurrentDropdown();
			}
		};
	}, []);

	return (
		<div ref={ref} className={`inline-block ${className}`}>
			{children}
			{isOpen &&
				element &&
				ReactDOM.createPortal(
					<div
						ref={dropdownRef}
						className={`flex overflow-auto absolute flex-col p-1 bg-white rounded-xl border border-gray-200 ${className}`}
						style={{ top, left, width, height }}
					>
						{list.map((item) => (
							<p
								key={item.value}
								className='px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700'
								onClick={() => onSelect(item.value, item.label)}
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

export default Dropdown;
