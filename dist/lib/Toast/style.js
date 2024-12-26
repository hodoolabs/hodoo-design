import { cva } from 'class-variance-authority';
const ToastStyle = cva([
    'fixed bottom-8 w-[320px] min-h-[64px] p-4 bg-gray-900 shadow rounded-2xl flex flex-col justify-center z-[999999999]',
], {
    variants: {
        isOpen: {
            true: ['visible'],
            false: ['invisible'],
        },
        position: {
            left: ['left-8'],
            center: ['left-[50%] translate-x-[-50%]'],
            right: ['right-8'],
        },
    },
});
const ButtonWrapStyle = cva(['flex justify-center gap-2 mt-3 '], {
    variants: {
        grow: {
            true: ['mx-0 w-full'],
            false: ['w-[200px] mx-auto'],
        },
    },
});
export { ToastStyle, ButtonWrapStyle };
