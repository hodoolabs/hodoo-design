'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import { AvatarStyle } from './style';
var Avatar = function (_a) {
    var size = _a.size, img = _a.img;
    return _jsx("img", { src: img, alt: 'avatar', className: cn(AvatarStyle({ size: size })) });
};
export default memo(Avatar, function (prev, next) { return prev.size === next.size && prev.img === next.img; });
