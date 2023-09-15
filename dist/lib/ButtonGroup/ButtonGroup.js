'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useState } from 'react';
import { styled } from 'styled-components';
import { cn } from '../../utils/style';
import { ButtonStyle } from './style';
const ButtonGroup = ({ buttons, defaultActive = 0, className }) => {
    const [active, setActive] = useState(defaultActive ? buttons[defaultActive].id : null);
    return (_jsx(ButtonGroupStyled, { className: className, children: buttons.map((button, index) => (_jsx("button", { className: cn(ButtonStyle({ active: active === index })), onClick: () => {
                button.onClick;
                setActive(index);
            }, children: button.label }))) }));
};
export default memo(ButtonGroup, (prev, next) => prev.buttons === next.buttons && prev.className === next.className);
const ButtonGroupStyled = styled.div `
	.active-button + button {
		border-left: 1px solid #c3ddfd;
	}
`;
