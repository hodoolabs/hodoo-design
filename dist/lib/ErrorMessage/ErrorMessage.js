'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { ErrorMessageStyle } from './style';
const ErrorMessage = ({ size = 'lg', error, errorRow = 1 }) => {
    const isError = !!error;
    return _jsx("div", { className: cn(ErrorMessageStyle({ size, isError, errorRow })), children: error });
};
export default ErrorMessage;
