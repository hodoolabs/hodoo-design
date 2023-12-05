import { ReactNode } from 'react';
interface IllustrationsProps {
    type?: 'list' | 'noReseults';
    description: ReactNode;
}
declare const Illustrations: ({ type, description }: IllustrationsProps) => import("react/jsx-runtime").JSX.Element;
export default Illustrations;
