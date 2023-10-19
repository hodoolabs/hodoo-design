import { cva } from 'class-variance-authority';
const MenuStyle = cva(['flex items-center gap-3 p-3 mb-1 cursor-pointer rounded-xl text-gray-700 hover:bg-gray-100'], {
    variants: {
        isCurrentPath: {
            true: ['bg-sky-100 text-blue-600 hover:bg-sky-100'],
        },
    },
});
const ArrowStyle = cva(['w-5 h-5 stroke-gray-500 transform ml-auto'], {
    variants: {
        isExpanded: {
            true: ['rotate-0'],
            false: ['-rotate-90'],
        },
    },
});
const SubMenusStyle = cva(['flex flex-col gap-1 duration-300 overflow-hidden'], {
    variants: {
        height: {
            [2]: ['h-[100px]'],
        },
        isExpanded: {
            false: ['h-[0px]'],
        },
    },
});
const SubMenuStyle = cva(['ml-10 px-4 py-3 rounded-xl cursor-pointer text-gray-700 hover:bg-gray-100'], {
    variants: {
        isCurrentPath: {
            true: ['bg-sky-100 text-blue-600 hover:bg-sky-100'],
        },
    },
});
export { MenuStyle, ArrowStyle, SubMenusStyle, SubMenuStyle };
