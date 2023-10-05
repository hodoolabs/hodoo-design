import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/style';
import { SpinnerStyle } from './style';
const Spinner = ({ size = 'medium' }) => {
    return (_jsxs("div", { className: 'flex items-center justify-center h-full z-[9999] relative', children: [_jsx("div", { className: 'absolute top-0 left-0 w-full h-full bg-white opacity-70' }), _jsx("img", { className: cn(SpinnerStyle({ size })), src: '/images/spinner.svg', alt: 'spinner' })] }));
};
export default Spinner;
