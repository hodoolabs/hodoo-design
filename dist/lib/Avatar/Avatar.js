'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { AvatarWrapStyle } from './style';
const Avatar = ({ img, type = 'circular', size = 'md', className }) => {
    return (_jsx("div", { className: `${cn(AvatarWrapStyle({ size, type }))} ${className}`, children: _jsx("img", { src: img, className: 'absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2', alt: 'avatar' }) }));
};
export default Avatar;
