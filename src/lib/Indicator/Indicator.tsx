'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import { IndicatorStyle } from './style';

interface IndicatorProps {
	type?: 'default' | 'legendWithText' | 'count';
	/**
	 * 이 값은 type이 legendWithText일떄만 넣어야함.
	 */
	legendWithText?: string;
	/**
	 * 이 값은 type이 count일떄만 넣어야함.
	 */
	countText?: number;
}

const Indicator = ({ type = 'default', legendWithText, countText }: IndicatorProps) => {
	return (
		<div className='inline-flex items-center gap-2'>
			<div className={cn(IndicatorStyle({ type }))}>{type === 'count' && countText}</div>
			{type === 'legendWithText' && <p className='text-sm font-medium text-gray-700'>{legendWithText}</p>}
		</div>
	);
};

export default memo(
	Indicator,
	(prev: IndicatorProps, next: IndicatorProps) =>
		prev.type === next.type && prev.legendWithText === next.legendWithText && prev.countText === next.countText
);
