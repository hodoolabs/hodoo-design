declare const TooltipBoxStyle: (props?: ({
    position?: "left" | "right" | "top" | "bottom" | null | undefined;
    isShowArrow?: "left" | "right" | "top" | "bottom" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const TooltipStyle: (props?: ({
    color?: "white" | "dark" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const DescriptionStyle: (props?: ({
    color?: "white" | "dark" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ArrowStyle: (props?: ({
    position?: "left" | "right" | "top" | "bottom" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { TooltipBoxStyle, TooltipStyle, DescriptionStyle, ArrowStyle };
