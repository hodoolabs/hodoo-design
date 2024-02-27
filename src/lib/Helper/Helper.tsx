'use client';

import { ReactNode } from 'react';
import { cn } from '../../utils/style';
import { HelperStyle } from './style';

interface HelperProps {
	size?: any;
	error?: string;
	helper?: ReactNode;
	disabled?: boolean;
}

const Helper = ({ size = 'lg', error, helper, disabled = false }: HelperProps) => {
	const isError = !!error;

	return <>{helper && <div className={cn(HelperStyle({ size, isError, disabled }))}>{helper}</div>}</>;
};

export default Helper;
