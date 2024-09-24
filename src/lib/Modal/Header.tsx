'use client';

import { ArrowSmallLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/style';
import Button from '../Button/Button';
import { ModalProps } from './Modal';
import { SubTitleStyle, TitleStyle } from './style';

const Header = ({ modalState, modalHistory, goBackModal, closeModal }: ModalProps) => {
	const { title, subTitle, size, isXButton = true } = modalState;
	return (
		<div className='flex flex-col bg-white rounded-t-3xl'>
			<div className={cn(TitleStyle({ size }))}>
				{modalHistory && modalHistory.length > 1 && goBackModal && (
					<div className='size-8'>
						<Button
							color='white'
							size='base'
							leftIcon={<ArrowSmallLeftIcon className='text-gray-500 group-hover:text-gray-700' />}
							onClick={goBackModal}
						/>
					</div>
				)}
				{isXButton && modalHistory?.length === 0 && <div className='size-8' />}

				<div className='flex items-center justify-center text-xl font-semibold text-center text-gray-900 whitespace-pre-wrap grow'>
					{title}
				</div>
				{isXButton && (
					<Button
						color='white'
						size='base'
						leftIcon={<XMarkIcon className='text-gray-500 group-hover:text-gray-700' />}
						onClick={closeModal}
					/>
				)}
			</div>
			{subTitle && (
				<div className={cn(SubTitleStyle({ size }))}>
					<div className='text-base font-medium leading-relaxed text-center text-gray-500 whitespace-pre-line'>
						{subTitle}
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
