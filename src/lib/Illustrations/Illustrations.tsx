import { ReactNode } from 'react';
import ListSvg from './images/List';
import NoResultsSvg from './images/NoResultsSvg';

interface IllustrationsProps {
	type?: 'list' | 'noReseults';
	description: ReactNode;
	className?: string;
}

const Illustrations = ({ type = 'noReseults', description, className }: IllustrationsProps) => {
	return (
		<div className={`flex items-center justify-center w-full ${className}`}>
			<div className='flex flex-col gap-4 items-center'>
				{type === 'list' && <ListSvg />}
				{type === 'noReseults' && <NoResultsSvg />}
				<div className='text-center text-slate-500 text-base font-medium whitespace-pre-line'>{description}</div>
			</div>
		</div>
	);
};

export default Illustrations;
