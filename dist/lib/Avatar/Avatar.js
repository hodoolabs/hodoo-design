'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { AvatarStyle } from './style';
const Avatar = ({ size, img }) => {
    return _jsx("img", { src: img, alt: 'avatar', className: cn(AvatarStyle({ size })) });
};
export default memo(Avatar, (prev, next) => prev.size === next.size && prev.img === next.img);
