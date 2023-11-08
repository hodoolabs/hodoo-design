'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { InputStyle, SkeletonStyle, ToggleStyle } from './style';
import Label from '../Label/Label';
import Helper from '../Helper/Helper';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { cn } from '../../utils/style';
const DatePicker = (_a) => {
    var _b, _c;
    var { size = 'lg', label, error, helper, required, disabled = false, className, onError, onChange } = _a, props = __rest(_a, ["size", "label", "error", "helper", "required", "disabled", "className", "onError", "onChange"]);
    const [isDestory, setIsDestroy] = useState(false);
    const handleChangeDate = (date, event, placeholder) => {
        if (!placeholder && !(date === null || date === void 0 ? void 0 : date.startDate) && !(date === null || date === void 0 ? void 0 : date.endDate))
            event.oncancel;
        else {
            onChange(date);
            onError && onError('');
        }
        setIsDestroy(true);
    };
    useEffect(() => {
        const handleResizeBrowser = throttle(() => {
            setIsDestroy(true);
        }, 1000);
        window.addEventListener('resize', handleResizeBrowser);
        return () => {
            window.removeEventListener('resize', handleResizeBrowser);
        };
    }, []);
    useEffect(() => {
        if (!isDestory)
            return;
        setIsDestroy(false);
    }, [isDestory]);
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [_jsx(Label, { size: size, error: error, label: label, disabled: disabled, required: required }), !isDestory ? (_jsx(Datepicker, Object.assign({ i18n: 'ko', readOnly: true, displayFormat: props.displayFormat, startFrom: ((_b = props.value) === null || _b === void 0 ? void 0 : _b.startDate) ? new Date((_c = props.value) === null || _c === void 0 ? void 0 : _c.startDate) : new Date(), toggleIcon: () => _jsx(CalendarDaysIcon, { className: 'w-5 h-5' }), toggleClassName: cn(ToggleStyle({ size, error: !!error, disabled })), inputClassName: cn(InputStyle({ size, error: !!error, disabled })), placeholder: props.placeholder || ' ', disabled: disabled, onChange: (date, event) => event && handleChangeDate(date, event, props.placeholder) }, props))) : (_jsx("div", { className: cn(SkeletonStyle({ size })) })), _jsx(Helper, { size: size, error: error, helper: helper, disabled: disabled }), _jsx(ErrorMessage, { size: size, error: error })] }));
};
export default DatePicker;
