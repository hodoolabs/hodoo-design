import { ReactNode } from 'react';
interface HelperProps {
    size?: any;
    error?: string;
    helper?: ReactNode;
    disabled?: boolean;
    required?: boolean;
}
declare const Helper: ({ size, error, helper, disabled }: HelperProps) => import("react/jsx-runtime").JSX.Element;
export default Helper;
