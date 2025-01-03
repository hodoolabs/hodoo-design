import { SpinnerSizeType } from '../../types/spinner';
interface SpinnerProps {
    isLoading: boolean;
    size?: SpinnerSizeType;
}
declare const Spinner: ({ isLoading, size }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
export default Spinner;
