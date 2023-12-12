'use client';

import { cn } from '../../utils/style';
import { IndicatorStyle } from './style';

interface IndicatorProps {
	label?: string;
	count?: number;
	isNew?: boolean;
	className?: string;
}

const Indicator = ({ label, count, isNew, className }: IndicatorProps) => {
	const getIndicatorText = () => {
		if (count) return count;
		if (isNew) return 'N';
	};

	return (
		<div className={`inline-flex items-center gap-2 ${className}`}>
			<div className={cn(IndicatorStyle({ label: !!label, count: typeof count === 'number', isNew }))}>
				{getIndicatorText()}
			</div>
			{label && <p className='text-sm font-medium text-gray-700'>{label}</p>}
		</div>
	);
};

export default Indicator;
