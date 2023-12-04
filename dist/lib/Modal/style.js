import { cva } from 'class-variance-authority';
const ModalStyle = cva(['fixed top-0 left-0 z-30 w-full h-screen z-[999999999]'], {
    variants: {
        isOpen: {
            true: ['visible'],
            false: ['invisible'],
        },
    },
});
const WrapStyle = cva(['absolute w-full shadow z-50 bg-white rounded-t-3xl overflow-hidden'], {
    variants: {
        size: {
            lg: ['max-w-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-b-3xl'],
            sm: ['max-w-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-b-3xl'],
            mobile: ['max-w-full bottom-0 left-0 rounded-b-none'],
        },
    },
});
const TitleStyle = cva(['flex px-8 pt-8 pb-5'], {
    variants: {
        size: {
            lg: [],
            sm: [],
            mobile: ['px-5 pt-6 pb-4'],
        },
    },
});
const SubTitleStyle = cva(['px-8 pb-6'], {
    variants: {
        size: {
            lg: [],
            sm: [],
            mobile: ['px-5 pb-5'],
        },
    },
});
const ContentStyle = cva(['bg-white'], {
    variants: {
        size: {
            lg: ['px-6 pb-6'],
            sm: ['px-6 pb-6'],
            mobile: ['px-5 pb-5'],
        },
    },
});
export { ContentStyle, ModalStyle, TitleStyle, WrapStyle, SubTitleStyle };
