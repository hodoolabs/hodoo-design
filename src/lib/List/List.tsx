import { forwardRef, ReactNode } from 'react';
import { cn } from '../../utils/style';
import { ListStyle } from './style';

export interface ListProps {
	children: ReactNode;
	className?: string;
	/**
	 * @description 호버가 가능할때 true로 설정(true시 호버하면 색깔이 변경됨-> bg-blue-50)
	 */
	isHover?: boolean;
	/**
	 * @description 해당 리스트가 active됐을때 설정(true시 색깔이 변경됨-> bg-blue-50)
	 */
	isActive?: boolean;
	onClick?: () => void;
}

const List = forwardRef<HTMLDivElement, ListProps>(({ children, className, isHover, isActive, onClick }, ref) => {
	return (
		<div ref={ref} onClick={() => onClick?.()} className={cn(ListStyle({ isHover, isActive }), className)}>
			{children}
		</div>
	);
});

export default List;
