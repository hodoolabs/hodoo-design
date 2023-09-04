import { cva } from 'class-variance-authority';

const IndicatorStyle = cva(
	['bg-red-500', 'rounded-full', 'flex', 'items-center', 'justify-center', 'text-sm', 'font-semibold', 'text-white'],
	{
		variants: {
			type: {
				default: ['w-2', 'h-2'],
				legendWithText: ['w-3', 'h-3'],
				count: ['w-6', 'h-6'],
			},
		},
	}
);

export { IndicatorStyle };
