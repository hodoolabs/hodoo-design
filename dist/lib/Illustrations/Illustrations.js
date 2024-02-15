import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ListSvg from './images/ListSvg';
import NoResultsSvg from './images/NoResultsSvg';
const Illustrations = ({ type = 'noResults', description, className }) => {
    return (_jsx("div", { className: `flex items-center justify-center w-full ${className}`, children: _jsxs("div", { className: 'flex flex-col items-center gap-4', children: [type === 'list' && _jsx(ListSvg, {}), type === 'noResults' && _jsx(NoResultsSvg, {}), _jsx("div", { className: 'text-base font-medium text-center text-gray-500 whitespace-pre-line', children: description })] }) }));
};
export default Illustrations;
