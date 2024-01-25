declare const ToastStyle: (props?: ({
    isOpen?: boolean | null | undefined;
    position?: "left" | "right" | "center" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ButtonWrapStyle: (props?: ({
    grow?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ToastStyle, ButtonWrapStyle };
