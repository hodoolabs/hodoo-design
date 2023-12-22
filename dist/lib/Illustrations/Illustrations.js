import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ListSvg from './images/List';
import NoResultsSvg from './images/NoResultsSvg';
const Illustrations = ({ type = 'noReseults', description, className }) => {
    return (_jsx("div", { className: `flex items-center justify-center w-full ${className}`, children: _jsxs("div", { className: 'flex flex-col gap-4 items-center', children: [type === 'list' && _jsx(ListSvg, {}), type === 'noReseults' && _jsx(NoResultsSvg, {}), _jsx("div", { className: 'text-center text-gray-500 text-base font-medium whitespace-pre-line', children: description })] }) }));
};
export default Illustrations;
