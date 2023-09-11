'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { BreadCrumbsType } from '../../types/router';
import { memo } from 'react';

interface BreadCrumbsProps {
	data: BreadCrumbsType;
	pathname: string;
}

const BreadCrumbs = ({ data, pathname }: BreadCrumbsProps) => {
	return (
		<div className='flex gap-2 mb-3 text-sm font-medium text-gray-500'>
			{data[pathname].bread_crumbs.map((item) => (
				<div key={item.url} className='flex items-center gap-2 leading-5'>
					<Link
						to={item.url}
						className='rounded hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2'
					>
						{item.label}
					</Link>
					<ChevronRightIcon className='w-4 h-4' />
				</div>
			))}
			<span className='text-gray-400'>{data[pathname].label}</span>
		</div>
	);
};

export default memo(
	BreadCrumbs,
	(prev: BreadCrumbsProps, next: BreadCrumbsProps) => prev.data === next.data && prev.pathname === next.pathname
);
