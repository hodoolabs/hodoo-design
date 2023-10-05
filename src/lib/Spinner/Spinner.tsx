import { cn } from '../../utils/style';
import { SpinnerStyle } from './style';

interface SpinnerProps {
	size?: 'small' | 'medium' | 'large';
}

const Spinner = ({ size = 'medium' }: SpinnerProps) => {
	return (
		<div className='flex items-center justify-center h-full z-[9999] relative'>
			<div className='absolute top-0 left-0 w-full h-full bg-white opacity-70'></div>
			<img className={cn(SpinnerStyle({ size }))} src={'/images/spinner.svg'} alt='spinner' />
		</div>
	);
};

export default Spinner;
