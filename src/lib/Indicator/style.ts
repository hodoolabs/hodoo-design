import { cva } from 'class-variance-authority';

const IndicatorStyle = cva(
	['bg-red-500 rounded-full flex items-center justify-center text-xs font-semibold text-white p-1'],
	{
		variants: {
			label: {
				true: ['p-1.5'],
			},
			count: {
				true: ['min-w-[24px] h-6 px-1.5 py-0.5'],
			},
			isNew: {
				true: ['border !w-5 !h-5 border-white'],
			},
		},
	}
);

export { IndicatorStyle };
