'use client';

import { ArrowSmallLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import useModal from '../../stores/useModal';
import Button from '../Button/Button';

const Header = () => {
	const { modalState, modalHistory, goBackModal, closeModal } = useModal();

	return (
		<div className='flex flex-col bg-white rounded-t-3xl'>
			<div className='flex px-8 pt-8 pb-5'>
				<div className='w-8 h-8'>
					{modalHistory.length > 1 && (
						<Button
							color='white'
							size='base'
							leftIcon={<ArrowSmallLeftIcon className='text-gray-500 group-hover:text-gray-700' />}
							onClick={goBackModal}
						/>
					)}
				</div>
				<div className='flex items-center justify-center text-xl font-semibold text-center text-gray-900 grow'>
					{modalState.title}
				</div>
				<Button
					color='white'
					size='base'
					leftIcon={<XMarkIcon className='text-gray-500 group-hover:text-gray-700' />}
					onClick={closeModal}
				/>
			</div>
			{modalState.subTitle && (
				<div className='px-8 pb-6'>
					<div className='text-base font-medium leading-relaxed text-center text-gray-500'>{modalState.subTitle}</div>
				</div>
			)}
		</div>
	);
};

export default Header;
