import { cva } from 'class-variance-authority';
var TooltipBoxStyle = cva(['absolute', 'w-max', 'opacity-0', 'peer-hover:opacity-100', 'transition', 'duration-300'], {
    variants: {
        position: {
            top: ['top-[-20px]', 'left-[50%]', 'translate-x-[-50%]', 'translate-y-[-100%]'],
            left: ['top-[50%]', 'left-[-20px]', 'translate-x-[-100%]', 'translate-y-[-50%]'],
            right: ['top-[50%]', 'right-[-20px]', 'translate-x-[100%]', 'translate-y-[-50%]'],
            bottom: ['bottom-[-20px]', 'left-[50%]', 'translate-x-[-50%]', 'translate-y-[100%]'],
        },
        isShowArrow: {
            top: ['top-[-40px]'],
            left: ['left-[-40px]'],
            right: ['right-[-40px]'],
            bottom: ['bottom-[-40px]'],
        },
    },
});
var TooltipStyle = cva(['relative', 'inline-block', 'px-3', 'py-2', 'text-sm', 'font-medium', 'rounded-lg', 'shadow-sm'], {
    variants: {
        color: {
            dark: ['text-white', 'bg-gray-900'],
            white: ['text-gray-900', 'bg-white'],
        },
    },
});
var DescriptionStyle = cva(['mt-0.5'], {
    variants: {
        color: {
            dark: ['text-gray-400'],
            white: ['text-gray-500'],
        },
    },
});
var ArrowStyle = cva(['absolute'], {
    variants: {
        position: {
            top: ['bottom-[0]', 'left-[50%]', 'translate-x-[-50%]', 'translate-y-[100%]', 'rotate-0'],
            left: ['top-[50%]', 'right-[6px]', 'translate-x-[100%]', 'translate-y-[-50%]', 'rotate-[270deg]'],
            right: ['top-[50%]', 'left-[6px]', 'translate-x-[-100%]', 'translate-y-[-50%]', 'rotate-90'],
            bottom: ['top-0', 'left-[50%]', 'translate-x-[-50%]', 'translate-y-[-100%]', 'rotate-180'],
        },
    },
});
export { TooltipBoxStyle, TooltipStyle, DescriptionStyle, ArrowStyle };
