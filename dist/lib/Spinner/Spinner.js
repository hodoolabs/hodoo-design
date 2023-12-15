'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SpinnerSvg from './images/SpinnerSvg';
const Spinner = ({ isLoading, size = 'md' }) => {
    return (_jsxs("div", { className: `fixed top-0 left-0 w-full flex items-center justify-center h-full z-[9999999999] opacity-0 pointer-events-none ${isLoading && 'spin-fade-in'}`, children: [_jsx("div", { className: 'absolute top-0 left-0 w-full h-full bg-white opacity-70' }), _jsx(SpinnerSvg, { size: size })] }));
};
export default Spinner;
