import { ReactNode } from 'react';
import ListSvg from './images/ListSvg';
import NoResultsSvg from './images/NoResultsSvg';

interface IllustrationsProps {
	type?: 'list' | 'noResults';
	description?: ReactNode;
	className?: string;
}

const Illustrations = ({ type = 'noResults', description, className }: IllustrationsProps) => {
	return (
		<div className={`flex items-center justify-center w-full ${className}`}>
			<div className='flex flex-col items-center gap-4'>
				{type === 'list' && <ListSvg />}
				{type === 'noResults' && <NoResultsSvg />}
				<div className='text-base font-medium text-center text-gray-500 whitespace-pre-line'>{description}</div>
			</div>
		</div>
	);
};

export default Illustrations;
