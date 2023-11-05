'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ErrorStyle, HelperStyle, LabelStyle, MaxLengthStyle, TextareaStyle } from './style';
const TextArea = ({ size = 'lg', label, value, error, maxLength, placeholder, helper, disabled, height, required, className, onChange, onError, }) => {
    const isError = !!error;
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [value]);
    return (_jsxs(TextAreaStyled, { className: `flex flex-col ${className}`, children: [label && (_jsxs("label", { className: cn(LabelStyle({ size, isError })), children: [required && _jsx("span", { className: 'text-red-600', children: "*" }), " ", label, maxLength && (_jsxs("span", { className: cn(MaxLengthStyle({ isError })), children: [value.length, "/", maxLength] }))] })), _jsx("textarea", { value: value, maxLength: maxLength, placeholder: placeholder, disabled: disabled, className: cn(TextareaStyle({ size, isError })), onChange: (event) => onChange && onChange(event.target.value), style: { height: height } }), helper && _jsx("div", { className: cn(HelperStyle({ size })), children: helper }), _jsx("div", { className: cn(ErrorStyle({ size, isError })), children: error })] }));
};
export default memo(TextArea, (prev, next) => prev.size === next.size &&
    prev.value === next.value &&
    prev.error === next.error &&
    prev.label === next.label &&
    prev.maxLength === next.maxLength &&
    prev.placeholder === next.placeholder &&
    prev.helper === next.helper &&
    prev.disabled === next.disabled &&
    prev.height === next.height &&
    prev.required === next.required &&
    prev.className === next.className &&
    prev.onChange === next.onChange &&
    prev.onError === next.onError);
const TextAreaStyled = styled.div `
	.scroll-none::-webkit-scrollbar {
		display: none;
	}

	.scroll-none::-webkit-scrollbar-thumb {
		display: none;
	}
`;
