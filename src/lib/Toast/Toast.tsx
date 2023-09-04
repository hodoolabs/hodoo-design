'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import useSetTimeout from '../../hooks/useSetTimeout';
import useToast from '../../stores/useToast';
import { cn } from '../../utils/style';
import { ToastStyle } from './style';
import ToastQuestionSvg from './ToastQuestionSvg';
import ToastSuccessSvg from './ToastSuccessSvg';
import ToastWarningSvg from './ToastWarningSvg';

const Toast = () => {
	const { toastState, closeToast } = useToast();
	const { toastingTime, title, description, leftButton, rightButton, position, leftIcon, isClose } = toastState;

	useSetTimeout(toastingTime, closeToast);

	return (
		<div className={cn(ToastStyle({ position }))}>
			<div className='flex gap-3'>
				{leftIcon === 'question'
					? ToastQuestionSvg()
					: leftIcon === 'success'
					? ToastSuccessSvg()
					: leftIcon === 'warning'
					? ToastWarningSvg()
					: ''}
				<div className='flex flex-col grow'>
					<div className='flex items-center text-[15px] font-medium text-white mt-1'>{title}</div>
					{description && <div className='mt-2 text-sm font-medium leading-5 text-gray-400'>{description}</div>}
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
			{leftButton?.text ||
				(rightButton?.text && (
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
				))}
		</div>
	);
};

export default Toast;
