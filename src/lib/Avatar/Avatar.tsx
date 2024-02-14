'use client';

import { cn } from '../../utils/style';
import { AvatarWrapStyle } from './style';

interface AvatarProps {
	size?: 'sm' | 'regular' | 'md' | 'lg' | 'xl';
	img: string;
	className?: string;
}

const Avatar = ({ size = 'md', img, className }: AvatarProps) => {
	return (
		<div className={`${cn(AvatarWrapStyle({ size }))} ${className}`}>
			<img src={img} className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='avatar' />
		</div>
	);
};

export default Avatar;
