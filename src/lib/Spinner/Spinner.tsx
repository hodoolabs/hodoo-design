'use client';

import { memo } from 'react';
import styled from 'styled-components';
import SpinnerSvg from './images/SpinnerSvg';

interface SpinnerProps {
	isLoading: boolean;
	size?: 'small' | 'medium' | 'large';
}

const Spinner = ({ isLoading, size = 'medium' }: SpinnerProps) => {
	return (
		<SpinnerStyled
			className={`fixed top-0 left-0 w-full flex items-center justify-center h-full z-[99999] opacity-0 pointer-events-none ${
				isLoading && 'spin-fade-in'
			}`}
		>
			<div className='absolute top-0 left-0 w-full h-full bg-white opacity-70' />
			<SpinnerSvg size={size} />
		</SpinnerStyled>
	);
};

export default memo(
	Spinner,
	(prev: SpinnerProps, next: SpinnerProps) => prev.isLoading === next.isLoading && prev.size === next.size
);

const SpinnerStyled = styled.div`
	@keyframes spinFadeIn {
		0% {
			opacity: 0;
			pointer-events: none;
		}
		100% {
			opacity: 1;
			pointer-events: auto;
		}
	}

	&.spin-fade-in {
		animation-name: spinFadeIn;
		animation-duration: 0.3s;
		animation-delay: 0.5s;
		animation-fill-mode: forwards;
	}
`;
