'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import useSetTimeout from '../../hooks/useSetTimeout';
import { ToastStateType } from '../../types/toast';
import { cn } from '../../utils/style';
import ToastQuestionSvg from './images/ToastQuestionSvg';
import ToastSuccessSvg from './images/ToastSuccessSvg';
import ToastWarningSvg from './images/ToastWarningSvg';
import { ToastStyle } from './style';

interface ToastProps {
	toastState: ToastStateType;
	closeToast: () => void;
}

const Toast = ({ toastState, closeToast }: ToastProps) => {
	const { toastingTime, title, description, leftButton, rightButton, position, leftIcon, isClose, isOpen } = toastState;

	useSetTimeout(closeToast, toastingTime);

	return (
		<div className={cn(ToastStyle({ isOpen, position }))}>
			<div className='flex gap-3'>
				<div className='w-8 h-8 rounded-lg'>
					{leftIcon === 'question' ? (
						<ToastQuestionSvg />
					) : leftIcon === 'success' ? (
						<ToastSuccessSvg />
					) : (
						leftIcon === 'warning' && <ToastWarningSvg />
					)}
				</div>
				<div className='flex flex-col grow'>
					<div className='flex items-center text-[15px] font-medium text-white mt-1'>{title}</div>
					{description && <div className='mt-2 text-sm font-medium text-gray-400'>{description}</div>}
				</div>
				{isClose && (
					<button
						className='flex items-center justify-center flex-none w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300'
						onClick={closeToast}
					>
						<XMarkIcon className='w-6 h-6 text-gray-400' />
					</button>
				)}
			</div>
			{(leftButton?.text || rightButton?.text) && (
				<div className='flex justify-center gap-2 mt-3 w-[200px] ml-auto mr-auto'>
					{leftButton?.text && (
						<button
							onClick={leftButton?.onClick}
							className='px-4 py-2 text-xs font-semibold text-gray-200 bg-gray-700 rounded-lg grow hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
						>
							{leftButton?.text}
						</button>
					)}
					{rightButton?.text && (
						<button
							onClick={rightButton?.onClick}
							className='px-4 py-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-lg grow hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
						>
							{rightButton?.text}
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Toast;
