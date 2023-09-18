'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ButtonStyle } from './style';
const ButtonGroup = ({ buttons, active, className, onActive }) => {
    return (_jsx(ButtonGroupStyled, { className: className, children: buttons.map((button) => (_jsx("button", { className: cn(ButtonStyle({ active: active === button.id })), onClick: () => onActive(button.id), children: button.label }, button.id))) }));
};
export default memo(ButtonGroup, (prev, next) => prev.buttons === next.buttons && prev.className === next.className);
const ButtonGroupStyled = styled.div `
	.active-button + button {
		border-left: 1px solid #c3ddfd;
	}
`;
