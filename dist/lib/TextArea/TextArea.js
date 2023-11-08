'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { TextareaStyle } from './style';
const TextArea = ({ size = 'lg', label, value, error, maxLength, placeholder, helper, disabled, height, required, className, onChange, onError, }) => {
    useEffect(() => {
        if (!onError)
            return;
        onError('');
    }, [value]);
    return (_jsxs(TextAreaStyled, { className: `flex flex-col ${className}`, children: [_jsx(Label, { size: size, value: value, error: error, label: label, maxLength: maxLength, disabled: disabled, required: required }), _jsx("textarea", { value: value, maxLength: maxLength, placeholder: placeholder, disabled: disabled, className: cn(TextareaStyle({ size, error: !!error })), onChange: (event) => onChange && onChange(event.target.value), style: { height } }), _jsx(Helper, { size: size, error: error, helper: helper, disabled: disabled }), _jsx(ErrorMessage, { size: size, error: error })] }));
};
export default TextArea;
const TextAreaStyled = styled.div `
	.scroll-none::-webkit-scrollbar {
		display: none;
	}

	.scroll-none::-webkit-scrollbar-thumb {
		display: none;
	}
`;
