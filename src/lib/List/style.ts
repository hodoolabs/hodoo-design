import { cva } from 'class-variance-authority';

const ListStyle = cva(
	[
		'!mt-0 flex w-full items-center gap-6 border-b border-b-gray-200 p-4 text-sm font-medium leading-tight text-gray-500',
	],
	{
		variants: {
			isHover: {
				true: ['cursor-pointer hover:bg-gray-50'],
			},
			isActive: {
				true: ['bg-blue-50/50 hover:bg-blue-50/50 border-b-blue-200'],
			},
		},
	}
);

export { ListStyle };
