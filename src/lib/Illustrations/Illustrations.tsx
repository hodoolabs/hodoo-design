import { ReactNode } from 'react';
import ListSvg from './images/List';
import NoResultsSvg from './images/NoResultsSvg';

interface IllustrationsProps {
	type?: 'list' | 'noReseults';
	description: ReactNode;
}

const Illustrations = ({ type = 'noReseults', description }: IllustrationsProps) => {
	return (
		<div className='flex flex-col gap-4 items-center'>
			{type === 'list' && <ListSvg />}
			{type === 'noReseults' && <NoResultsSvg />}
			<div className='text-center text-slate-500 text-base font-medium'>{description}</div>
		</div>
	);
};

export default Illustrations;
