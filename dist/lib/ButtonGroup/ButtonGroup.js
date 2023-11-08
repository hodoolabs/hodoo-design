'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ButtonStyle } from './style';
const ButtonGroup = ({ buttons, active, className, onActive }) => {
    return (_jsx(ButtonGroupStyled, { className: className, children: buttons.map((button) => (_jsx("button", { className: cn(ButtonStyle({ active: active === button.value })), onClick: () => onActive(button.value), children: button.label }, button.value))) }));
};
export default ButtonGroup;
const ButtonGroupStyled = styled.div `
	.active-button + button {
		border-left: 1px solid #c3ddfd;
	}
`;
