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
CalendarIcon;
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { cn } from '../../utils/style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Helper from '../Helper/Helper';
import Label from '../Label/Label';
import { InputStyle, SkeletonStyle, ToggleStyle } from './style';
import { CalendarIcon } from '@heroicons/react/24/outline';
import DefaultI18nAdapter from './defaultAdapter';
import NextIntlAdapter from './next-intl-Adapter';
const DatePicker = (_a) => {
    var _b, _c;
    var { size = 'lg', label, error, helper, required, disabled = false, className, onError, onChange } = _a, props = __rest(_a, ["size", "label", "error", "helper", "required", "disabled", "className", "onError", "onChange"]);
    const locale = i18nAdapter.useLocale();
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
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [_jsx(Label, { size: size, error: error, label: label, disabled: disabled, required: required }), !isDestory ? (_jsx(Datepicker, Object.assign({ i18n: locale, readOnly: true, displayFormat: props.displayFormat, startFrom: ((_b = props.value) === null || _b === void 0 ? void 0 : _b.startDate) ? new Date((_c = props.value) === null || _c === void 0 ? void 0 : _c.startDate) : new Date(), toggleIcon: () => _jsx(CalendarIcon, { className: 'w-5 h-5' }), toggleClassName: cn(ToggleStyle({ size, error: !!error, disabled })), inputClassName: cn(InputStyle({ size, error: !!error, disabled })), placeholder: props.placeholder || ' ', disabled: disabled, onChange: (date, event) => event && handleChangeDate(date, event, props.placeholder) }, props))) : (_jsx("div", { className: cn(SkeletonStyle({ size })) })), _jsx(Helper, { size: size, error: error, helper: helper, disabled: disabled }), _jsx(ErrorMessage, { size: size, error: error })] }));
};
export default DatePicker;
let i18nAdapter = new DefaultI18nAdapter();
const configureDatePickerI18n = (adapter) => {
    i18nAdapter = adapter;
};
/**
 * @description 만약 next-intl을 사용하는 경우 앱 최초로 init 하는곳에서 nextintladapter로 configureDatePickerI18n를 실행
 * @example
 * // 앱 최상단 init 하는곳
 * import NextIntlAdapter from './next-intl-Adapter';
 * configureDatePickerI18n(new NextIntlAdapter());
 */
export { DefaultI18nAdapter, NextIntlAdapter, configureDatePickerI18n };
