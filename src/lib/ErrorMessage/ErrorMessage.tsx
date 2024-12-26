'use client';

import { cn } from '../../utils/style';
import { ErrorMessageStyle } from './style';

interface ErrorMessageProps {
	size?: any;
	error?: string;
	errorRow?: 1 | 2;
	className?: string;
}

const ErrorMessage = ({ size = 'lg', error, errorRow = 1, className }: ErrorMessageProps) => {
	const isError = !!error;

	return <div className={cn(ErrorMessageStyle({ size, isError, errorRow }), className)}>{error}</div>;
};

export default ErrorMessage;
