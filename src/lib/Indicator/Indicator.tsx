'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import { IndicatorStyle } from './style';

interface IndicatorProps {
	label?: string;
	count?: number;
	className?: string;
}

const Indicator = ({ label, count, className }: IndicatorProps) => {
	return (
		<div className={`inline-flex items-center gap-2 ${className}`}>
			<div className={cn(IndicatorStyle({ label: !!label, count: typeof count === 'number' }))}>{count ?? ''}</div>
			{label && <p className='text-sm font-medium text-gray-700'>{label}</p>}
		</div>
	);
};

export default memo(
	Indicator,
	(prev: IndicatorProps, next: IndicatorProps) =>
		prev.label === next.label && prev.count === next.count && prev.className === next.className
);
