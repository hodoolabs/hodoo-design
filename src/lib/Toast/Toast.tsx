'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, useCallback } from 'react';
import { cn } from '../../utils/style';
import ToastQuestionSvg from './images/ToastQuestionSvg';
import ToastSuccessSvg from './images/ToastSuccessSvg';
import ToastWarningSvg from './images/ToastWarningSvg';
import { ButtonWrapStyle, ToastStyle } from './style';
import { ToastStateType } from '../../types/toast';

const ANIMATION_DURATION = 300;
const ANIMATION_DELAY = 50;

interface ToastProps {
	toastState: ToastStateType;
	closeToast: () => void;
}

const Toast = ({ toastState, closeToast }: ToastProps) => {
	const { toastingTime, title, description, leftButton, rightButton, position, leftIcon, closeButton, isOpen } =
		toastState;

	// 애니메이션 상태 관리
	const [isAnimating, setIsAnimating] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const handleCloseWithAnimation = useCallback(() => {
		if (isClosing) return;

		setIsClosing(true);
		setIsAnimating(false);

		setTimeout(() => {
			closeToast();
			setIsClosing(false);
		}, ANIMATION_DURATION);
	}, [closeToast, isClosing]);

	// Toast가 열릴 때 애니메이션 처리
	useEffect(() => {
		if (isOpen && !isClosing) {
			setShouldRender(true);
			setTimeout(() => {
				setIsAnimating(true);
			}, ANIMATION_DELAY);
		} else if (!isOpen) {
			setShouldRender(false);
			setIsAnimating(false);
			setIsClosing(false);
		}
	}, [isOpen, isClosing]);

	// 자동 닫기 타이머
	useEffect(() => {
		if (!toastingTime || !isOpen || isClosing) return;

		const timer = setTimeout(() => {
			handleCloseWithAnimation();
		}, toastingTime);

		return () => clearTimeout(timer);
	}, [toastingTime, title, isOpen, isClosing, handleCloseWithAnimation]);

	// 렌더링하지 않을 때는 null 반환
	if (!shouldRender) return null;

	return (
		<div className={cn(ToastStyle({ isOpen: isAnimating, position }))}>
			<div className='flex gap-3'>
				{leftIcon && (
					<div className='w-8 h-8 rounded-lg'>
						{leftIcon === 'question' ? (
							<ToastQuestionSvg />
						) : leftIcon === 'success' ? (
							<ToastSuccessSvg />
						) : leftIcon === 'warning' ? (
							<ToastWarningSvg />
						) : (
							leftIcon
						)}
					</div>
				)}
				<div className='flex flex-col grow'>
					<div className='flex items-center text-[15px] leading-normal text-start font-medium text-white mt-1'>
						{title}
					</div>
					{description && <div className='mt-2 text-sm font-medium text-gray-400'>{description}</div>}
				</div>
				{closeButton && (
					<button
						className='flex flex-none justify-center items-center w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300'
						onClick={handleCloseWithAnimation}
					>
						<XMarkIcon className='w-6 h-6 text-gray-400' />
					</button>
				)}
			</div>
			{(leftButton?.text || rightButton?.text) && (
				<div className={cn(ButtonWrapStyle({ grow: !leftIcon && !closeButton }))}>
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
