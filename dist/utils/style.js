import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
var cn = function () {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return twMerge(clsx(inputs));
};
export { cn };
