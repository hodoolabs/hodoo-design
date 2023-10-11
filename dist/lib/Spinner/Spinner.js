import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SpinnerSvg from './images/SpinnerSvg';
const Spinner = ({ size = 'medium' }) => {
    return (_jsxs("div", { className: 'fixed top-0 left-0 w-full flex items-center justify-center h-full z-[99999]', children: [_jsx("div", { className: 'absolute top-0 left-0 w-full h-full bg-white opacity-70' }), _jsx(SpinnerSvg, { size: size })] }));
};
export default Spinner;
