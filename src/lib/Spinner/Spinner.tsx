import SpinnerSvg from './images/SpinnerSvg';

interface SpinnerProps {
	size?: 'small' | 'medium' | 'large';
}

const Spinner = ({ size = 'medium' }: SpinnerProps) => {
	return (
		<div className='fixed top-0 left-0 w-full flex items-center justify-center h-full z-[99999]'>
			<div className='absolute top-0 left-0 w-full h-full bg-white opacity-70' />
			<SpinnerSvg size={size} />
		</div>
	);
};

export default Spinner;
