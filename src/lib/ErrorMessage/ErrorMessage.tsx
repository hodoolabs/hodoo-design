'use client';

import { cn } from '../../utils/style';
import { ErrorMessageStyle } from './style';

interface ErrorMessageProps {
	size?: any;
	error?: string;
}

const ErrorMessage = ({ size = 'lg', error }: ErrorMessageProps) => {
	const isError = !!error;

	return <div className={cn(ErrorMessageStyle({ size, isError }))}>{error}</div>;
};

export default ErrorMessage;
