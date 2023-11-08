'use client';

import { cn } from '../../utils/style';
import { AvatarStyle } from './style';

interface AvatarProps {
	size?: 'sm' | 'regular' | 'md' | 'lg' | 'xl';
	img: string;
	className?: string;
}

const Avatar = ({ size = 'md', img, className }: AvatarProps) => {
	return <img src={img} alt='avatar' className={`${cn(AvatarStyle({ size }))} ${className}`} />;
};

export default Avatar;
