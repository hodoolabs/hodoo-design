interface AvatarProps {
    img: string;
    type?: 'circular' | 'rectangular';
    size?: 'xs' | 'sm' | 'regular' | 'md' | 'lg' | 'xl';
    className?: string;
}
declare const Avatar: ({ img, type, size, className }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
