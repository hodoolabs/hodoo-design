import { cva } from 'class-variance-authority';
const ModalContainerStyle = cva(['fixed top-0 left-0 z-30 flex justify-center w-full h-screen'], {
    variants: {
        isMobile: {
            true: ['bottom-0', 'items-end'],
            false: ['top-0', 'items-center'],
        },
    },
});
const ModalStyle = cva(['w-full', 'shadow', 'z-50', 'transition-300 '], {
    variants: {
        size: {
            lg: ['max-w-xl'],
            sm: ['max-w-md'],
        },
        animationBottomToTop: {
            true: ['tablet:translate-y-[253px]'],
            false: ['tablet:translate-y-[-253px]'],
        },
    },
});
const ModalContentStyle = cva(['px-6 pb-6 bg-white'], {
    variants: {
        isMobile: {
            false: ['rounded-b-3xl'],
        },
    },
});
export { ModalStyle, ModalContainerStyle, ModalContentStyle };
