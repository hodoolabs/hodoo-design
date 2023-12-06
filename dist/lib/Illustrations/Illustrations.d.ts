import { ReactNode } from 'react';
interface IllustrationsProps {
    type?: 'list' | 'noReseults';
    description: ReactNode;
    className?: string;
}
declare const Illustrations: ({ type, description, className }: IllustrationsProps) => import("react/jsx-runtime").JSX.Element;
export default Illustrations;
