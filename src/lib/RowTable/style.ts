import { cva } from 'class-variance-authority';

const TableBodyStyle = cva(['flex px-4 py-3 items-center text-gray-900 text-sm min-w-fit grow'], {
	variants: {
		click: {
			true: ['cursor-pointer'],
		},
	},
});
export { TableBodyStyle };
