import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ListSvg from './images/List';
import NoResultsSvg from './images/NoResultsSvg';
const Illustrations = ({ type = 'noReseults', description }) => {
    return (_jsxs("div", { className: 'flex flex-col gap-4 items-center', children: [type === 'list' && _jsx(ListSvg, {}), type === 'noReseults' && _jsx(NoResultsSvg, {}), _jsx("div", { className: 'text-center text-slate-500 text-base font-medium', children: description })] }));
};
export default Illustrations;
