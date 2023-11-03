declare const ModalStyle: (props?: ({
    isOpen?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const WrapStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
    position?: "middle" | "bottom" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ContentStyle: (props?: ({
    position?: "middle" | "bottom" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ModalStyle, WrapStyle, ContentStyle };
