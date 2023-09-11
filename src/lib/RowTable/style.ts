import { cva } from 'class-variance-authority';

const TableHeaderStyle = cva(['font-semibold', 'flex', 'p-4', 'items-center', 'justify-start', 'w-full'], {
	variants: {
		size: {
			lg: ['text-base'],
			sm: ['text-sm'],
		},
	},
});

const TableBodyStyle = cva(['flex', 'p-4', 'grow', 'justify-start', 'w-full'], {
	variants: {
		size: {
			lg: ['text-base'],
			sm: ['text-sm'],
		},
	},
});
export { TableHeaderStyle, TableBodyStyle };
