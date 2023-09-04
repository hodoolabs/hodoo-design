var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { create } from 'zustand';
var initialState = { title: '', subTitle: undefined, content: null, size: 'lg', isOpen: false };
var useModal = create(function (set) { return ({
    modalState: initialState,
    modalHistory: [],
    openModal: function (_a) {
        var title = _a.title, subTitle = _a.subTitle, content = _a.content, size = _a.size;
        set(function (state) { return ({
            modalState: { title: title, subTitle: subTitle, content: content, size: size, isOpen: true },
            modalHistory: __spreadArray(__spreadArray([], state.modalHistory, true), [{ title: title, subTitle: subTitle, content: content, size: size, isOpen: true }], false),
        }); });
    },
    goBackModal: function () {
        set(function (state) { return ({
            modalHistory: state.modalHistory.filter(function (_item, index) { return index !== state.modalHistory.length - 1; }),
        }); });
        set(function (state) { return ({
            modalState: __assign({}, state.modalHistory[state.modalHistory.length - 1]),
        }); });
    },
    closeModal: function () {
        set(function () { return ({ modalState: initialState, modalHistory: [] }); });
    },
}); });
export default useModal;
