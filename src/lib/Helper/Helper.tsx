'use client';

import { ReactNode } from 'react';
import { cn } from '../../utils/style';
import { HelperStyle } from './style';

interface HelperProps {
	size?: any;
	error?: string;
	helper?: ReactNode;
	disabled?: boolean;
	required?: boolean;
}

const Helper = ({ size = 'lg', error, helper, disabled = false }: HelperProps) => {
	return helper && <div className={cn(HelperStyle({ size, error: !!error, disabled }))}>{helper}</div>;
};

export default Helper;
