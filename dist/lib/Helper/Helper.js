'use client';
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { HelperStyle } from './style';
const Helper = ({ size = 'lg', error, helper, disabled = false }) => {
    const isError = !!error;
    return _jsx(_Fragment, { children: helper && _jsx("div", { className: cn(HelperStyle({ size, isError, disabled })), children: helper }) });
};
export default Helper;
