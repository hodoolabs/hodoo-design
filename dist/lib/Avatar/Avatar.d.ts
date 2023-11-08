interface AvatarProps {
    size?: 'sm' | 'regular' | 'md' | 'lg' | 'xl';
    img: string;
    className?: string;
}
declare const Avatar: ({ size, img, className }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
