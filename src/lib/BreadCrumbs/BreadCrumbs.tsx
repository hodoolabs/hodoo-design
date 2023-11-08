'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { BreadCrumbsType } from '../../types/breadCrumbs';

interface BreadCrumbsProps {
	data: BreadCrumbsType;
	path: string;
	className?: string;
	onPush: (path: string) => void;
}

const BreadCrumbs = ({ data, path, className, onPush }: BreadCrumbsProps) => {
	return (
		<div className={`flex gap-2 text-sm font-medium text-gray-500 ${className}`}>
			{data[path].bread_crumbs.map((item) => (
				<div key={item.path} className='flex items-center gap-2'>
					<span onClick={() => onPush(item.path)} className='rounded hover:text-gray-700 cursor-pointer'>
						{item.label}
					</span>
					<ChevronRightIcon className='w-4 h-4' />
				</div>
			))}
			<span className='text-gray-400'>{data[path].label}</span>
		</div>
	);
};

export default BreadCrumbs;
