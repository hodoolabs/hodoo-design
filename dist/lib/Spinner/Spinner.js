import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import SpinnerSvg from './images/SpinnerSvg';
const Spinner = ({ isLoading = false, size = 'medium' }) => {
    return (_jsx(SpinnerStyled, { children: _jsxs("div", { className: `fixed top-0 left-0 w-full flex items-center justify-center h-full z-[99999] opacity-0 pointer-events-none ${isLoading && 'spin-fade-in'}`, children: [_jsx("div", { className: 'absolute top-0 left-0 w-full h-full bg-white opacity-70' }), _jsx(SpinnerSvg, { size: size })] }) }));
};
export default Spinner;
const SpinnerStyled = styled.div `
	@keyframes spinFadeIn {
		0% {
			opacity: 0;
			pointer-events: none;
		}
		100% {
			opacity: 1;
			pointer-events: auto;
		}
	}

	.spin-fade-in {
		animation-name: spinFadeIn;
		animation-duration: 0.3s;
		animation-delay: 0.5s;
		animation-fill-mode: forwards;
	}
`;
