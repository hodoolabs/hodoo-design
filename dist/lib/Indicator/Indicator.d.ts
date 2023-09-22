/// <reference types="react" />
interface IndicatorProps {
    type?: 'default' | 'legendWithText' | 'count';
    /**
     * 이 값은 type이 legendWithText일떄만 넣어야함.
     */
    legendWithText?: string;
    /**
     * 이 값은 type이 count일떄만 넣어야함.
     */
    countText?: number;
}
declare const _default: import("react").MemoExoticComponent<({ type, legendWithText, countText }: IndicatorProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
