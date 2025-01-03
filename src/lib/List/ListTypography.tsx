import { forwardRef, ReactNode } from 'react';
import { cn } from '../../utils/style';

interface ListTypographyProps {
	children: ReactNode;
	className?: string;
}

const ListLargeSemibold = forwardRef<HTMLParagraphElement, ListTypographyProps>(({ children, className }, ref) => {
	return (
		<p ref={ref} className={cn('semibold-base', className)}>
			{children}
		</p>
	);
});

const ListLargeMedium = forwardRef<HTMLParagraphElement, ListTypographyProps>(({ children, className }, ref) => {
	return (
		<p ref={ref} className={cn('medium-base', className)}>
			{children}
		</p>
	);
});

const ListCaption = forwardRef<HTMLParagraphElement, ListTypographyProps>(({ children, className }, ref) => {
	return (
		<p ref={ref} className={cn('caption1', className)}>
			{children}
		</p>
	);
});

export { ListCaption, ListLargeMedium, ListLargeSemibold };
