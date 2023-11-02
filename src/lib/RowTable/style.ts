import { cva } from 'class-variance-authority';

const TableHeaderStyle = cva(['font-semibold', 'flex', 'px-4', 'py-2', 'items-center', 'justify-start', 'min-w-fit'], {
	variants: {
		size: {
			lg: ['text-base'],
			sm: ['text-sm'],
		},
	},
});

const TableBodyStyle = cva(['flex', 'px-4', 'py-3', 'items-center', 'justify-start', 'min-w-fit', 'text-gray-900'], {
	variants: {
		size: {
			lg: ['text-base'],
			sm: ['text-sm'],
		},
		click: {
			true: ['cursor-pointer'],
		},
	},
});
export { TableHeaderStyle, TableBodyStyle };
