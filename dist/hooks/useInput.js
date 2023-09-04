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
var useInput = function (setInputValues) {
    var handleInputsValue = function (type, value) {
        setInputValues(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[type] = __assign(__assign({}, state[type]), { value: value }), _a)));
        });
    };
    var handleInputsError = function (type, error) {
        setInputValues(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[type] = __assign(__assign({}, state[type]), { error: error }), _a)));
        });
    };
    return { handleInputsValue: handleInputsValue, handleInputsError: handleInputsError };
};
export default useInput;
