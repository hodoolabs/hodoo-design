'use client';

import { cn } from '../../utils/style';
import { AvatarWrapStyle } from './style';

interface AvatarProps {
	img: string;
	type?: 'circular' | 'rectangular';
	size?: 'xs' | 'sm' | 'regular' | 'md' | 'lg' | 'xl';
	className?: string;
}

const Avatar = ({ img, type = 'circular', size = 'md', className }: AvatarProps) => {
	return (
		<div className={`${cn(AvatarWrapStyle({ size, type }))} ${className}`}>
			<img src={img} className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='avatar' />
		</div>
	);
};

export default Avatar;
