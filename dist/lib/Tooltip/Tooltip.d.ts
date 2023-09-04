import { ReactNode } from 'react';
interface TooltipProps {
    color: 'dark' | 'white';
    title: string;
    description?: ReactNode;
    isShowArrow: boolean;
    children: ReactNode;
    position: 'top' | 'right' | 'left' | 'bottom';
}
declare const _default: import("react").MemoExoticComponent<({ color, title, description, isShowArrow, children, position }: TooltipProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
