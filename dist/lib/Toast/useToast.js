import { create } from 'zustand';
var initialState = {
    toastingTime: 0,
    title: '',
    description: '',
    leftButton: { text: '', onClick: function () { } },
    rightButton: { text: '', onClick: function () { } },
    isClose: true,
    position: 'left',
    leftIcon: 'success',
    isOpen: false,
};
var useToast = create(function (set) { return ({
    toastState: initialState,
    openToast: function (_a) {
        var toastingTime = _a.toastingTime, title = _a.title, description = _a.description, leftButton = _a.leftButton, rightButton = _a.rightButton, isClose = _a.isClose, position = _a.position, leftIcon = _a.leftIcon;
        set(function () { return ({
            toastState: {
                toastingTime: toastingTime,
                title: title,
                description: description,
                leftButton: leftButton,
                rightButton: rightButton,
                isClose: isClose,
                position: position,
                leftIcon: leftIcon,
                isOpen: true,
            },
        }); });
    },
    closeToast: function () {
        set(function () { return ({ toastState: initialState }); });
    },
}); });
export default useToast;
