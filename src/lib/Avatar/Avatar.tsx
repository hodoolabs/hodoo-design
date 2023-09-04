'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import { AvatarStyle } from './style';

interface AvatarProps {
	size: 'sm' | 'regular' | 'md' | 'lg' | 'xl';
	img: string;
}

const Avatar = ({ size, img }: AvatarProps) => {
	return <img src={img} alt='avatar' className={cn(AvatarStyle({ size }))} />;
};

export default memo(Avatar, (prev: AvatarProps, next: AvatarProps) => prev.size === next.size && prev.img === next.img);
