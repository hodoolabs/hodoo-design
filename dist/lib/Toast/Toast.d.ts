import { ToastStateType } from '../../stores/useToast';
interface ToastProps {
    toastState: ToastStateType;
    closeToast: () => void;
}
declare const Toast: ({ toastState, closeToast }: ToastProps) => import("react/jsx-runtime").JSX.Element;
export default Toast;
