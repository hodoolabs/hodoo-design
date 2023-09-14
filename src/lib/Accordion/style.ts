import { cva } from 'class-variance-authority';

const MenuStyle = cva(
	['flex', 'items-center', 'gap-3', 'px-4', 'py-3', 'mb-[2px]', 'cursor-pointer', 'rounded-xl', 'hover:bg-gray-100'],
	{
		variants: {
			isCurrentPath: {
				true: ['bg-sky-100', 'hover:bg-sky-100'],
			},
		},
	}
);

const LabelStyle = cva(['grow', 'text-gray-800'], {
	variants: {
		isCurrentPath: {
			true: ['text-blue-600'],
		},
	},
});

const ArrowStyle = cva(['w-5', 'h-5', 'stroke-gray-500', 'transition-transform', 'transform'], {
	variants: {
		isExpanded: {
			true: ['rotate-180'],
			false: ['rotate-0'],
		},
	},
});

const SubMenusStyle = cva(['flex', 'flex-col', 'gap-2', 'transition-300', 'overflow-hidden'], {
	variants: {
		height: {
			[2 as number]: ['h-[104px]'],
		},
		isExpanded: {
			false: ['h-0'],
		},
	},
});

const SubMenuStyle = cva(['ml-10', 'px-4', 'py-3', 'rounded-xl', 'cursor-pointer', 'hover:bg-gray-100'], {
	variants: {
		isCurrentPath: {
			true: ['bg-sky-100', 'text-blue-600', 'hover:bg-sky-100'],
		},
	},
});

export { MenuStyle, LabelStyle, ArrowStyle, SubMenusStyle, SubMenuStyle };
