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
export { ToastStyle };
