'use client';

import { cn } from '../../utils/style';
import { ErrorMessageStyle } from './style';

interface ErrorMessageProps {
	size?: any;
	error?: string;
}

const ErrorMessage = ({ size = 'lg', error }: ErrorMessageProps) => {
	return <div className={cn(ErrorMessageStyle({ size, error: !!error }))}>{error}</div>;
};

export default ErrorMessage;
