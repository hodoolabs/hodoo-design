'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { AvatarStyle } from './style';
const Avatar = ({ size = 'md', img, className }) => {
    return _jsx("img", { src: img, alt: 'avatar', className: `${cn(AvatarStyle({ size }))} ${className}` });
};
export default Avatar;
