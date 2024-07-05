'use client';

import { cn } from '../../utils/style';
import { ErrorMessageStyle } from './style';

interface ErrorMessageProps {
	size?: any;
	error?: string;
	errorRow?: 1 | 2;
}

const ErrorMessage = ({ size = 'lg', error, errorRow = 1 }: ErrorMessageProps) => {
	const isError = !!error;

	return <div className={cn(ErrorMessageStyle({ size, isError, errorRow }))}>{error}</div>;
};

export default ErrorMessage;
