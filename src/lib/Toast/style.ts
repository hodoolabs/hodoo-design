import { cva } from 'class-variance-authority';

const ToastStyle = cva(
	[
		'fixed',
		'w-[320px]',
		'min-h-[64px]',
		'p-4',
		'bg-gray-900',
		'shadow',
		'rounded-2xl',
		'flex',
		'flex-col',
		'justify-center',
	],
	{
		variants: {
			position: {
				left: ['bottom-8', 'left-8'],
				center: ['bottom-8', 'left-[50%]', 'translate-x-[-50%]'],
				right: ['bottom-8', 'right-8'],
			},
		},
	}
);

export { ToastStyle };
