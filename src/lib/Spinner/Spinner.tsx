'use client';

import SpinnerSvg from './images/SpinnerSvg';

interface SpinnerProps {
	isLoading: boolean;
	size?: 'sm' | 'md' | 'lg';
}

const Spinner = ({ isLoading, size = 'md' }: SpinnerProps) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full flex items-center justify-center h-full z-[9999999999] opacity-0 pointer-events-none ${
				isLoading && 'spin-fade-in'
			}`}
		>
			<div className='absolute top-0 left-0 w-full h-full bg-white opacity-70' />
			<SpinnerSvg size={size} />
		</div>
	);
};

export default Spinner;
